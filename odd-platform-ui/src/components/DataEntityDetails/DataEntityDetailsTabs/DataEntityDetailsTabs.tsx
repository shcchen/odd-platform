import React from 'react';
import { type AppTabItem, AppTabs } from 'components/shared/elements';
import { useAppParams, useAppPaths, useQueryParams } from 'lib/hooks';
import {
  getDataEntityAlertsCount,
  getDataEntityDetails,
  getDatasetTestReportTotal,
  getIsDataEntityBelongsToClass,
  getIsEntityStatusDeleted,
} from 'redux/selectors';
import { useAppSelector } from 'redux/lib/hooks';
import {
  type ActivityQuery,
  defaultActivityQuery,
} from 'components/shared/elements/Activity/common';
import { defaultLineageQuery } from '../Lineage/HierarchyLineage/lineageLib/constants';
import { defaultDEGLineageQuery } from '../Lineage/DEGLineage/lib/constants';

const DataEntityDetailsTabs: React.FC = () => {
  const { dataEntityId, dataEntityViewType } = useAppParams();
  const { defaultQueryString: lineageQueryString } = useQueryParams(defaultLineageQuery);
  const { defaultQueryString: degLineageQueryString } =
    useQueryParams(defaultDEGLineageQuery);
  const { defaultQueryString: activityQueryString } =
    useQueryParams<ActivityQuery>(defaultActivityQuery);
  const {
    DataEntityRoutes,
    dataEntityOverviewPath,
    datasetStructurePath,
    dataEntityLineagePath,
    dataEntityTestReportPath,
    dataEntityLinkedItemsPath,
    dataEntityHistoryPath,
    dataEntityAlertsPath,
    dataEntityActivityPath,
    dataEntityCollaborationPath,
  } = useAppPaths();

  const openAlertsCount = useAppSelector(getDataEntityAlertsCount(dataEntityId));
  const dataEntityDetails = useAppSelector(getDataEntityDetails(dataEntityId));
  const datasetQualityTestReportTotal = useAppSelector(
    getDatasetTestReportTotal(dataEntityId)
  );
  const { isDataset, isQualityTest, isTransformer, isDEG } = useAppSelector(
    getIsDataEntityBelongsToClass(dataEntityId)
  );
  const isStatusDeleted = useAppSelector(getIsEntityStatusDeleted(dataEntityId));

  const tabs = React.useMemo<AppTabItem[]>(
    () => [
      {
        name: 'Overview',
        link: dataEntityOverviewPath(dataEntityId),
        value: DataEntityRoutes.overview,
      },
      {
        name: 'Structure',
        link: datasetStructurePath(DataEntityRoutes.overview, dataEntityId),
        hidden: !isDataset,
        value: DataEntityRoutes.structure,
      },
      {
        name: 'Lineage',
        link: dataEntityLineagePath(
          dataEntityId,
          isDEG ? degLineageQueryString : lineageQueryString
        ),
        hidden: isQualityTest || isStatusDeleted,
        value: DataEntityRoutes.lineage,
      },
      {
        name: 'Test reports',
        link: dataEntityTestReportPath(dataEntityId),
        hidden: !isDataset || !datasetQualityTestReportTotal || isStatusDeleted,
        value: DataEntityRoutes.testReports,
      },
      {
        name: 'History',
        link: dataEntityHistoryPath(dataEntityId),
        hidden: (!isQualityTest && !isTransformer) || isStatusDeleted,
        value: DataEntityRoutes.history,
      },
      {
        name: 'Alerts',
        link: dataEntityAlertsPath(dataEntityId),
        value: DataEntityRoutes.alerts,
        hint: openAlertsCount > 0 ? openAlertsCount : undefined,
        hintType: 'alert',
        hidden: isStatusDeleted,
      },
      {
        name: 'Linked items',
        link: dataEntityLinkedItemsPath(dataEntityId),
        hidden: !dataEntityDetails?.hasChildren || isStatusDeleted,
        value: DataEntityRoutes.linkedItems,
      },
      {
        name: 'Activity',
        link: dataEntityActivityPath(dataEntityId, activityQueryString),
        value: 'activity',
      },
      {
        name: 'Discussions',
        link: dataEntityCollaborationPath(dataEntityId),
        value: DataEntityRoutes.discussions,
        hidden: isStatusDeleted,
      },
    ],
    [
      dataEntityId,
      activityQueryString,
      dataEntityDetails?.hasChildren,
      openAlertsCount,
      isDataset,
      isQualityTest,
      isTransformer,
      datasetQualityTestReportTotal,
      isDEG,
      degLineageQueryString,
      lineageQueryString,
      dataEntityDetails.status,
      isStatusDeleted,
    ]
  );

  const [selectedTab, setSelectedTab] = React.useState(-1);

  React.useEffect(() => {
    setSelectedTab(
      dataEntityViewType ? tabs.findIndex(tab => tab.value === dataEntityViewType) : 0
    );
  }, [tabs, dataEntityViewType]);

  return (
    <>
      {tabs.length && selectedTab >= 0 ? (
        <AppTabs
          type='primary'
          items={tabs}
          selectedTab={selectedTab}
          handleTabChange={() => {}}
        />
      ) : null}
    </>
  );
};

export default DataEntityDetailsTabs;
