/* eslint-disable */

// generated by FalconJX
goog.addDependency('../../../WeaveJS.js', ['WeaveJS'], ['Weave', 'WeaveTest', 'weavejs.data.ColumnUtils', 'weavejs.path.WeavePath', 'weavejs.util.JS', 'org.apache.flex.utils.Language']);
goog.addDependency('../../../org/apache/flex/utils/Language.js', ['org.apache.flex.utils.Language'], []);
goog.addDependency('../../../WeaveTest.js', ['WeaveTest'], ['weavejs.core.LinkableCallbackScript', 'weavejs.core.LinkableFunction', 'weavejs.core.LinkableNumber', 'weavejs.core.LinkableSynchronizer', 'weavejs.core.WeaveArchive', 'weavejs.data.bin.AbstractBinningDefinition', 'weavejs.data.bin.CategoryBinningDefinition', 'weavejs.data.bin.CustomSplitBinningDefinition', 'weavejs.data.bin.DynamicBinningDefinition', 'weavejs.data.bin.EqualIntervalBinningDefinition', 'weavejs.data.bin.ExplicitBinningDefinition', 'weavejs.data.bin.NaturalJenksBinningDefinition', 'weavejs.data.bin.NumberClassifier', 'weavejs.data.bin.QuantileBinningDefinition', 'weavejs.data.bin.SimpleBinningDefinition', 'weavejs.data.bin.SingleValueClassifier', 'weavejs.data.bin.StandardDeviationBinningDefinition', 'weavejs.data.bin.StringClassifier', 'weavejs.data.column.AlwaysDefinedColumn', 'weavejs.data.column.BinnedColumn', 'weavejs.data.column.ColorColumn', 'weavejs.data.column.CombinedColumn', 'weavejs.data.column.FilteredColumn', 'weavejs.data.column.NormalizedColumn', 'weavejs.data.column.SortedColumn', 'weavejs.data.column.SortedIndexColumn', 'weavejs.data.column.StringLookup', 'weavejs.data.key.ColumnDataFilter', 'weavejs.data.key.DynamicKeyFilter', 'weavejs.data.key.DynamicKeySet', 'weavejs.data.key.FilteredKeySet', 'weavejs.data.key.KeyFilter', 'weavejs.data.key.KeySet', 'weavejs.data.key.KeySetCallbackInterface', 'weavejs.data.key.KeySetUnion', 'weavejs.data.key.SortedKeySet', 'weavejs.data.source.CSVDataSource', 'weavejs.data.source.GeoJSONDataSource', 'weavejs.geom.ZoomBounds']);
goog.addDependency('../../../weavejs/geom/ZoomBounds.js', ['weavejs.geom.ZoomBounds'], ['weavejs.api.core.ILinkableVariable']);
goog.addDependency('../../../weavejs/data/source/GeoJSONDataSource.js', ['weavejs.data.source.GeoJSONDataSource'], ['weavejs.data.source.AbstractDataSource', 'weavejs.data.source.GeoJSONDataSourceData', 'weavejs.data.source.GeoJSONDataSourceNode', 'weavejs.api.data.IDataSource_File']);
goog.addDependency('../../../weavejs/data/source/GeoJSONDataSourceNode.js', ['weavejs.data.source.GeoJSONDataSourceNode'], ['weavejs.api.data.IColumnReference', 'weavejs.api.data.IWeaveTreeNode']);
goog.addDependency('../../../weavejs/data/source/GeoJSONDataSourceData.js', ['weavejs.data.source.GeoJSONDataSourceData'], ['weavejs.geom.ProjectionManager']);
goog.addDependency('../../../weavejs/geom/ProjectionManager.js', ['weavejs.geom.ProjectionManager'], []);
goog.addDependency('../../../weavejs/data/source/CSVDataSource.js', ['weavejs.data.source.CSVDataSource'], ['weavejs.core.LinkableFile', 'weavejs.data.source.AbstractDataSource', 'weavejs.api.data.IDataSource_File']);
goog.addDependency('../../../weavejs/core/LinkableFile.js', ['weavejs.core.LinkableFile'], ['weavejs.core.LinkablePromise', 'weavejs.api.core.ILinkableVariable']);
goog.addDependency('../../../weavejs/core/LinkablePromise.js', ['weavejs.core.LinkablePromise'], ['weavejs.api.core.IDisposableObject', 'weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/data/key/KeyFilter.js', ['weavejs.data.key.KeyFilter'], ['weavejs.data.key.KeySet', 'weavejs.api.core.ILinkableObject', 'weavejs.api.data.IKeyFilter']);
goog.addDependency('../../../weavejs/data/key/KeySet.js', ['weavejs.data.key.KeySet'], ['weavejs.core.LinkableVariable', 'weavejs.data.key.KeySetCallbackInterface', 'weavejs.api.data.IKeySet']);
goog.addDependency('../../../weavejs/data/key/KeySetCallbackInterface.js', ['weavejs.data.key.KeySetCallbackInterface'], ['weavejs.core.CallbackCollection', 'weavejs.api.data.IKeySetCallbackInterface']);
goog.addDependency('../../../weavejs/data/key/DynamicKeySet.js', ['weavejs.data.key.DynamicKeySet'], ['weavejs.core.LinkableDynamicObject', 'weavejs.api.data.IDynamicKeySet']);
goog.addDependency('../../../weavejs/api/data/IDynamicKeySet.js', ['weavejs.api.data.IDynamicKeySet'], ['weavejs.api.core.ILinkableDynamicObject']);
goog.addDependency('../../../weavejs/data/key/ColumnDataFilter.js', ['weavejs.data.key.ColumnDataFilter'], ['weavejs.data.key.ColumnDataFilterRange', 'weavejs.api.core.ILinkableObjectWithNewProperties', 'weavejs.api.data.IKeyFilter', 'weavejs.api.ui.IObjectWithDescription']);
goog.addDependency('../../../weavejs/api/ui/IObjectWithDescription.js', ['weavejs.api.ui.IObjectWithDescription'], []);
goog.addDependency('../../../weavejs/data/key/ColumnDataFilterRange.js', ['weavejs.data.key.ColumnDataFilterRange'], []);
goog.addDependency('../../../weavejs/data/column/StringLookup.js', ['weavejs.data.column.StringLookup'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/data/column/SortedIndexColumn.js', ['weavejs.data.column.SortedIndexColumn'], ['weavejs.data.column.DynamicColumn', 'weavejs.api.data.IAttributeColumn', 'weavejs.api.data.IPrimitiveColumn']);
goog.addDependency('../../../weavejs/data/column/SortedColumn.js', ['weavejs.data.column.SortedColumn'], ['weavejs.data.column.ExtendedDynamicColumn', 'weavejs.api.data.IAttributeColumn']);
goog.addDependency('../../../weavejs/data/column/NormalizedColumn.js', ['weavejs.data.column.NormalizedColumn'], ['weavejs.data.column.ExtendedDynamicColumn']);
goog.addDependency('../../../weavejs/data/column/FilteredColumn.js', ['weavejs.data.column.FilteredColumn'], ['weavejs.data.column.ExtendedDynamicColumn', 'weavejs.data.key.FilteredKeySet', 'weavejs.api.data.IDynamicKeyFilter']);
goog.addDependency('../../../weavejs/data/key/FilteredKeySet.js', ['weavejs.data.key.FilteredKeySet'], ['weavejs.core.CallbackCollection', 'weavejs.data.key.DynamicKeyFilter', 'weavejs.data.key.SortedKeySet', 'weavejs.api.data.IDynamicKeyFilter', 'weavejs.api.data.IFilteredKeySet']);
goog.addDependency('../../../weavejs/api/data/IFilteredKeySet.js', ['weavejs.api.data.IFilteredKeySet'], ['weavejs.api.core.ILinkableObject', 'weavejs.api.data.IKeySet']);
goog.addDependency('../../../weavejs/data/key/SortedKeySet.js', ['weavejs.data.key.SortedKeySet'], ['weavejs.api.data.IKeySet']);
goog.addDependency('../../../weavejs/data/key/DynamicKeyFilter.js', ['weavejs.data.key.DynamicKeyFilter'], ['weavejs.core.LinkableDynamicObject', 'weavejs.api.data.IDynamicKeyFilter']);
goog.addDependency('../../../weavejs/api/data/IDynamicKeyFilter.js', ['weavejs.api.data.IDynamicKeyFilter'], ['weavejs.api.core.ILinkableDynamicObject']);
goog.addDependency('../../../weavejs/data/column/CombinedColumn.js', ['weavejs.data.column.CombinedColumn'], ['weavejs.core.CallbackCollection', 'weavejs.data.key.KeySetUnion', 'weavejs.api.data.IAttributeColumn']);
goog.addDependency('../../../weavejs/data/key/KeySetUnion.js', ['weavejs.data.key.KeySetUnion'], ['weavejs.api.core.IDisposableObject', 'weavejs.api.data.IKeySet']);
goog.addDependency('../../../weavejs/data/column/ColorColumn.js', ['weavejs.data.column.ColorColumn'], ['weavejs.data.column.ExtendedDynamicColumn', 'weavejs.util.ColorRamp']);
goog.addDependency('../../../weavejs/util/ColorRamp.js', ['weavejs.util.ColorRamp'], ['weavejs.core.LinkableVariable', 'weavejs.util.ColorNode']);
goog.addDependency('../../../weavejs/util/ColorNode.js', ['weavejs.util.ColorNode'], []);
goog.addDependency('../../../weavejs/data/column/BinnedColumn.js', ['weavejs.data.column.BinnedColumn'], ['weavejs.data.column.ExtendedDynamicColumn', 'weavejs.api.data.IPrimitiveColumn']);
goog.addDependency('../../../weavejs/data/column/AlwaysDefinedColumn.js', ['weavejs.data.column.AlwaysDefinedColumn'], ['weavejs.data.column.ExtendedDynamicColumn']);
goog.addDependency('../../../weavejs/data/bin/StandardDeviationBinningDefinition.js', ['weavejs.data.bin.StandardDeviationBinningDefinition'], ['weavejs.data.bin.AbstractBinningDefinition']);
goog.addDependency('../../../weavejs/data/bin/SimpleBinningDefinition.js', ['weavejs.data.bin.SimpleBinningDefinition'], ['weavejs.data.bin.AbstractBinningDefinition']);
goog.addDependency('../../../weavejs/data/bin/QuantileBinningDefinition.js', ['weavejs.data.bin.QuantileBinningDefinition'], ['weavejs.data.bin.AbstractBinningDefinition']);
goog.addDependency('../../../weavejs/data/bin/NaturalJenksBinningDefinition.js', ['weavejs.data.bin.NaturalJenksBinningDefinition'], ['weavejs.data.bin.AbstractBinningDefinition']);
goog.addDependency('../../../weavejs/data/bin/ExplicitBinningDefinition.js', ['weavejs.data.bin.ExplicitBinningDefinition'], ['weavejs.core.LinkableHashMap', 'weavejs.api.data.IBinningDefinition']);
goog.addDependency('../../../weavejs/data/bin/EqualIntervalBinningDefinition.js', ['weavejs.data.bin.EqualIntervalBinningDefinition'], ['weavejs.data.bin.AbstractBinningDefinition']);
goog.addDependency('../../../weavejs/data/bin/DynamicBinningDefinition.js', ['weavejs.data.bin.DynamicBinningDefinition'], ['weavejs.core.LinkableDynamicObject', 'weavejs.data.bin.StringClassifier', 'weavejs.api.data.IBinningDefinition']);
goog.addDependency('../../../weavejs/data/bin/StringClassifier.js', ['weavejs.data.bin.StringClassifier'], ['weavejs.core.LinkableVariable', 'weavejs.api.data.IBinClassifier']);
goog.addDependency('../../../weavejs/data/bin/CustomSplitBinningDefinition.js', ['weavejs.data.bin.CustomSplitBinningDefinition'], ['weavejs.data.bin.AbstractBinningDefinition', 'weavejs.data.bin.NumberClassifier']);
goog.addDependency('../../../weavejs/data/bin/NumberClassifier.js', ['weavejs.data.bin.NumberClassifier'], ['weavejs.api.data.IBinClassifier']);
goog.addDependency('../../../weavejs/data/bin/CategoryBinningDefinition.js', ['weavejs.data.bin.CategoryBinningDefinition'], ['weavejs.data.bin.AbstractBinningDefinition', 'weavejs.data.bin.SingleValueClassifier']);
goog.addDependency('../../../weavejs/data/bin/SingleValueClassifier.js', ['weavejs.data.bin.SingleValueClassifier'], ['weavejs.core.LinkableVariable', 'weavejs.api.data.IBinClassifier']);
goog.addDependency('../../../weavejs/data/bin/AbstractBinningDefinition.js', ['weavejs.data.bin.AbstractBinningDefinition'], ['weavejs.api.data.IBinClassifier', 'weavejs.api.data.IBinningDefinition']);
goog.addDependency('../../../weavejs/api/data/IBinningDefinition.js', ['weavejs.api.data.IBinningDefinition'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/api/data/IBinClassifier.js', ['weavejs.api.data.IBinClassifier'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/core/WeaveArchive.js', ['weavejs.core.WeaveArchive'], ['weavejs.util.JSByteArray']);
goog.addDependency('../../../weavejs/util/JSByteArray.js', ['weavejs.util.JSByteArray'], []);
goog.addDependency('../../../weavejs/core/LinkableSynchronizer.js', ['weavejs.core.LinkableSynchronizer'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/core/LinkableNumber.js', ['weavejs.core.LinkableNumber'], ['weavejs.core.LinkableVariable']);
goog.addDependency('../../../weavejs/core/LinkableFunction.js', ['weavejs.core.LinkableFunction'], ['weavejs.core.LinkableString']);
goog.addDependency('../../../weavejs/core/LinkableCallbackScript.js', ['weavejs.core.LinkableCallbackScript'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../Weave.js', ['Weave'], ['weavejs.WeaveAPI', 'weavejs.core.EditorManager', 'weavejs.core.LinkableHashMap', 'weavejs.core.LinkableVariable', 'weavejs.core.ProgressIndicator', 'weavejs.core.Scheduler', 'weavejs.core.SessionManager', 'weavejs.core.SessionStateLog', 'weavejs.data.AttributeColumnCache', 'weavejs.data.CSVParser', 'weavejs.data.StatisticsCache', 'weavejs.data.key.QKeyManager', 'weavejs.net.URLRequestUtils', 'weavejs.path.WeavePath', 'weavejs.path.WeavePathUI', 'weavejs.util.Dictionary2D', 'weavejs.util.JS', 'weavejs.util.StandardLib', 'weavejs.api.core.ICallbackCollection', 'weavejs.api.core.IDisposableObject', 'weavejs.api.core.ILinkableHashMap', 'weavejs.api.core.ILinkableObject', 'weavejs.api.core.IProgressIndicator', 'weavejs.api.core.IScheduler', 'weavejs.api.core.ISessionManager', 'weavejs.api.data.IAttributeColumnCache', 'weavejs.api.data.ICSVParser', 'weavejs.api.data.IQualifiedKeyManager', 'weavejs.api.data.IStatisticsCache', 'weavejs.api.net.IURLRequestUtils', 'weavejs.api.ui.IEditorManager']);
goog.addDependency('../../../weavejs/path/WeavePathUI.js', ['weavejs.path.WeavePathUI'], ['weavejs.path.WeavePathData']);
goog.addDependency('../../../weavejs/path/WeavePathData.js', ['weavejs.path.WeavePathData'], ['weavejs.data.ColumnUtils', 'weavejs.data.column.DynamicColumn', 'weavejs.data.column.ExtendedDynamicColumn', 'weavejs.data.column.ReferencedColumn', 'weavejs.path.WeavePath', 'weavejs.path.WeavePathDataShared', 'weavejs.api.data.IKeySetCallbackInterface']);
goog.addDependency('../../../weavejs/api/data/IKeySetCallbackInterface.js', ['weavejs.api.data.IKeySetCallbackInterface'], ['weavejs.api.core.ICallbackCollection']);
goog.addDependency('../../../weavejs/path/WeavePathDataShared.js', ['weavejs.path.WeavePathDataShared'], []);
goog.addDependency('../../../weavejs/data/ColumnUtils.js', ['weavejs.data.ColumnUtils'], ['weavejs.data.column.DynamicColumn', 'weavejs.data.column.ExtendedDynamicColumn', 'weavejs.data.column.ReferencedColumn', 'weavejs.data.column.SecondaryKeyNumColumn']);
goog.addDependency('../../../weavejs/data/column/SecondaryKeyNumColumn.js', ['weavejs.data.column.SecondaryKeyNumColumn'], ['weavejs.data.column.AbstractAttributeColumn', 'weavejs.api.data.IPrimitiveColumn']);
goog.addDependency('../../../weavejs/data/column/ReferencedColumn.js', ['weavejs.data.column.ReferencedColumn'], ['weavejs.core.CallbackCollection', 'weavejs.data.hierarchy.GlobalColumnDataSource', 'weavejs.api.data.IColumnWrapper']);
goog.addDependency('../../../weavejs/data/hierarchy/GlobalColumnDataSource.js', ['weavejs.data.hierarchy.GlobalColumnDataSource'], ['weavejs.data.column.CSVColumn', 'weavejs.data.column.EquationColumn', 'weavejs.data.hierarchy.ColumnTreeNode', 'weavejs.api.data.IDataSource']);
goog.addDependency('../../../weavejs/data/hierarchy/ColumnTreeNode.js', ['weavejs.data.hierarchy.ColumnTreeNode'], ['weavejs.data.hierarchy.WeaveTreeDescriptorNode', 'weavejs.api.data.IColumnReference', 'weavejs.api.data.IWeaveTreeNodeWithPathFinding']);
goog.addDependency('../../../weavejs/data/hierarchy/WeaveTreeDescriptorNode.js', ['weavejs.data.hierarchy.WeaveTreeDescriptorNode'], ['weavejs.util.WeaveTreeItem', 'weavejs.api.data.IWeaveTreeNode']);
goog.addDependency('../../../weavejs/data/column/EquationColumn.js', ['weavejs.data.column.EquationColumn'], ['weavejs.data.EquationColumnLib', 'weavejs.data.column.AbstractAttributeColumn', 'weavejs.api.data.IPrimitiveColumn']);
goog.addDependency('../../../weavejs/data/EquationColumnLib.js', ['weavejs.data.EquationColumnLib'], []);
goog.addDependency('../../../weavejs/data/column/CSVColumn.js', ['weavejs.data.column.CSVColumn'], ['weavejs.data.column.AbstractAttributeColumn', 'weavejs.api.data.IAttributeColumn']);
goog.addDependency('../../../weavejs/data/column/ExtendedDynamicColumn.js', ['weavejs.data.column.ExtendedDynamicColumn'], ['weavejs.core.CallbackCollection', 'weavejs.api.data.IColumnWrapper']);
goog.addDependency('../../../weavejs/data/column/DynamicColumn.js', ['weavejs.data.column.DynamicColumn'], ['weavejs.core.LinkableDynamicObject', 'weavejs.api.data.IColumnWrapper']);
goog.addDependency('../../../weavejs/core/LinkableDynamicObject.js', ['weavejs.core.LinkableDynamicObject'], ['weavejs.core.LinkableWatcher', 'weavejs.api.core.ICallbackCollection', 'weavejs.api.core.ILinkableDynamicObject']);
goog.addDependency('../../../weavejs/core/LinkableWatcher.js', ['weavejs.core.LinkableWatcher'], ['weavejs.api.core.IDisposableObject', 'weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/path/WeavePath.js', ['weavejs.path.WeavePath'], []);
goog.addDependency('../../../weavejs/net/URLRequestUtils.js', ['weavejs.net.URLRequestUtils'], ['weavejs.api.net.IURLRequestUtils']);
goog.addDependency('../../../weavejs/data/StatisticsCache.js', ['weavejs.data.StatisticsCache'], ['weavejs.data.ColumnStatistics', 'weavejs.api.data.IStatisticsCache']);
goog.addDependency('../../../weavejs/data/ColumnStatistics.js', ['weavejs.data.ColumnStatistics'], ['weavejs.api.data.IColumnStatistics']);
goog.addDependency('../../../weavejs/data/AttributeColumnCache.js', ['weavejs.data.AttributeColumnCache'], ['weavejs.api.data.ColumnMetadata', 'weavejs.api.data.DataType', 'weavejs.data.column.DateColumn', 'weavejs.data.column.GeometryColumn', 'weavejs.data.column.NumberColumn', 'weavejs.data.column.StringColumn', 'weavejs.data.key.QKeyManager', 'weavejs.data.source.CachedDataSource', 'weavejs.geom.GeneralizedGeometry', 'weavejs.api.data.IAttributeColumnCache']);
goog.addDependency('../../../weavejs/data/source/CachedDataSource.js', ['weavejs.data.source.CachedDataSource'], ['weavejs.data.source.AbstractDataSource']);
goog.addDependency('../../../weavejs/data/source/AbstractDataSource.js', ['weavejs.data.source.AbstractDataSource'], ['weavejs.data.column.ProxyColumn', 'weavejs.data.hierarchy.HierarchyUtils', 'weavejs.api.core.IDisposableObject', 'weavejs.api.data.IDataSource']);
goog.addDependency('../../../weavejs/data/hierarchy/HierarchyUtils.js', ['weavejs.data.hierarchy.HierarchyUtils'], ['weavejs.api.data.IColumnReference', 'weavejs.api.data.IDataSource_File', 'weavejs.api.data.IWeaveTreeNodeWithPathFinding']);
goog.addDependency('../../../weavejs/api/data/IWeaveTreeNodeWithPathFinding.js', ['weavejs.api.data.IWeaveTreeNodeWithPathFinding'], ['weavejs.api.data.IWeaveTreeNode']);
goog.addDependency('../../../weavejs/api/data/IDataSource_File.js', ['weavejs.api.data.IDataSource_File'], ['weavejs.api.data.IDataSource']);
goog.addDependency('../../../weavejs/api/data/IColumnReference.js', ['weavejs.api.data.IColumnReference'], []);
goog.addDependency('../../../weavejs/data/column/ProxyColumn.js', ['weavejs.data.column.ProxyColumn'], ['weavejs.data.column.AbstractAttributeColumn', 'weavejs.api.data.IColumnWrapper']);
goog.addDependency('../../../weavejs/api/data/IColumnWrapper.js', ['weavejs.api.data.IColumnWrapper'], ['weavejs.api.data.IAttributeColumn']);
goog.addDependency('../../../weavejs/data/key/QKeyManager.js', ['weavejs.data.key.QKeyManager'], ['weavejs.data.key.QKey', 'weavejs.data.key.QKeyGetter', 'weavejs.api.data.IQualifiedKeyManager']);
goog.addDependency('../../../weavejs/data/key/QKeyGetter.js', ['weavejs.data.key.QKeyGetter'], ['weavejs.util.WeavePromise']);
goog.addDependency('../../../weavejs/data/key/QKey.js', ['weavejs.data.key.QKey'], ['weavejs.data.CSVParser', 'weavejs.api.data.IQualifiedKey']);
goog.addDependency('../../../weavejs/data/CSVParser.js', ['weavejs.data.CSVParser'], ['weavejs.api.core.ILinkableObject', 'weavejs.api.data.ICSVParser']);
goog.addDependency('../../../weavejs/data/column/StringColumn.js', ['weavejs.data.column.StringColumn'], ['weavejs.data.column.AbstractAttributeColumn', 'weavejs.util.AsyncSort', 'weavejs.api.data.IBaseColumn', 'weavejs.api.data.IPrimitiveColumn']);
goog.addDependency('../../../weavejs/util/AsyncSort.js', ['weavejs.util.AsyncSort'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/data/column/NumberColumn.js', ['weavejs.data.column.NumberColumn'], ['weavejs.data.column.AbstractAttributeColumn', 'weavejs.api.data.IBaseColumn', 'weavejs.api.data.IPrimitiveColumn']);
goog.addDependency('../../../weavejs/data/column/GeometryColumn.js', ['weavejs.data.column.GeometryColumn'], ['weavejs.data.column.AbstractAttributeColumn', 'weavejs.geom.GeneralizedGeometry']);
goog.addDependency('../../../weavejs/geom/GeneralizedGeometry.js', ['weavejs.geom.GeneralizedGeometry'], ['weavejs.geom.BLGNode', 'weavejs.geom.BLGTree', 'weavejs.geom.BLGTreeUtils', 'weavejs.geom.GeoJSON', 'weavejs.geom.GeometryType', 'weavejs.geom.SimpleGeometry', 'weavejs.geom.VertexChainLink', 'weavejs.util.ArrayUtils', 'weavejs.api.data.ISimpleGeometry']);
goog.addDependency('../../../weavejs/util/ArrayUtils.js', ['weavejs.util.ArrayUtils'], []);
goog.addDependency('../../../weavejs/geom/SimpleGeometry.js', ['weavejs.geom.SimpleGeometry'], ['weavejs.api.data.ISimpleGeometry']);
goog.addDependency('../../../weavejs/api/data/ISimpleGeometry.js', ['weavejs.api.data.ISimpleGeometry'], []);
goog.addDependency('../../../weavejs/geom/GeometryType.js', ['weavejs.geom.GeometryType'], []);
goog.addDependency('../../../weavejs/geom/GeoJSON.js', ['weavejs.geom.GeoJSON'], []);
goog.addDependency('../../../weavejs/geom/BLGTreeUtils.js', ['weavejs.geom.BLGTreeUtils'], ['weavejs.geom.VertexChainLink']);
goog.addDependency('../../../weavejs/geom/VertexChainLink.js', ['weavejs.geom.VertexChainLink'], []);
goog.addDependency('../../../weavejs/geom/BLGTree.js', ['weavejs.geom.BLGTree'], []);
goog.addDependency('../../../weavejs/geom/BLGNode.js', ['weavejs.geom.BLGNode'], []);
goog.addDependency('../../../weavejs/data/column/DateColumn.js', ['weavejs.data.column.DateColumn'], ['weavejs.data.column.AbstractAttributeColumn', 'weavejs.api.data.IBaseColumn', 'weavejs.api.data.IPrimitiveColumn']);
goog.addDependency('../../../weavejs/api/data/IPrimitiveColumn.js', ['weavejs.api.data.IPrimitiveColumn'], ['weavejs.api.data.IAttributeColumn']);
goog.addDependency('../../../weavejs/api/data/IBaseColumn.js', ['weavejs.api.data.IBaseColumn'], ['weavejs.api.data.IAttributeColumn']);
goog.addDependency('../../../weavejs/data/column/AbstractAttributeColumn.js', ['weavejs.data.column.AbstractAttributeColumn'], ['weavejs.core.CallbackCollection', 'weavejs.data.column.ColumnDataTask', 'weavejs.api.data.IAttributeColumn']);
goog.addDependency('../../../weavejs/data/column/ColumnDataTask.js', ['weavejs.data.column.ColumnDataTask'], []);
goog.addDependency('../../../weavejs/api/data/ColumnMetadata.js', ['weavejs.api.data.ColumnMetadata'], ['weavejs.api.data.Aggregation', 'weavejs.api.data.DataType', 'weavejs.api.data.DateFormat', 'weavejs.api.data.EntityType']);
goog.addDependency('../../../weavejs/api/data/EntityType.js', ['weavejs.api.data.EntityType'], []);
goog.addDependency('../../../weavejs/api/data/DateFormat.js', ['weavejs.api.data.DateFormat'], []);
goog.addDependency('../../../weavejs/api/data/DataType.js', ['weavejs.api.data.DataType'], []);
goog.addDependency('../../../weavejs/api/data/Aggregation.js', ['weavejs.api.data.Aggregation'], []);
goog.addDependency('../../../weavejs/core/SessionStateLog.js', ['weavejs.core.SessionStateLog'], ['weavejs.core.LinkableBoolean', 'weavejs.core.LogEntry', 'weavejs.api.core.IDisposableObject', 'weavejs.api.core.ILinkableVariable']);
goog.addDependency('../../../weavejs/core/LogEntry.js', ['weavejs.core.LogEntry'], []);
goog.addDependency('../../../weavejs/core/LinkableBoolean.js', ['weavejs.core.LinkableBoolean'], ['weavejs.core.LinkableVariable']);
goog.addDependency('../../../weavejs/core/SessionManager.js', ['weavejs.core.SessionManager'], ['weavejs.util.WeaveTreeItem', 'weavejs.api.core.ILinkableDynamicObject', 'weavejs.api.core.ILinkableObjectWithBusyStatus', 'weavejs.api.core.ILinkableObjectWithNewProperties', 'weavejs.api.core.ISessionManager']);
goog.addDependency('../../../weavejs/api/core/ILinkableObjectWithNewProperties.js', ['weavejs.api.core.ILinkableObjectWithNewProperties'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/api/core/ILinkableObjectWithBusyStatus.js', ['weavejs.api.core.ILinkableObjectWithBusyStatus'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/api/core/ILinkableDynamicObject.js', ['weavejs.api.core.ILinkableDynamicObject'], ['weavejs.api.core.ILinkableCompositeObject']);
goog.addDependency('../../../weavejs/util/WeaveTreeItem.js', ['weavejs.util.WeaveTreeItem'], []);
goog.addDependency('../../../weavejs/core/ProgressIndicator.js', ['weavejs.core.ProgressIndicator'], ['weavejs.api.core.IProgressIndicator']);
goog.addDependency('../../../weavejs/core/LinkableHashMap.js', ['weavejs.core.LinkableHashMap'], ['weavejs.api.core.DynamicState', 'weavejs.core.CallbackCollection', 'weavejs.core.ChildListCallbackInterface', 'weavejs.util.BackwardsCompatibility', 'weavejs.api.core.IChildListCallbackInterface', 'weavejs.api.core.ILinkableHashMap']);
goog.addDependency('../../../weavejs/util/BackwardsCompatibility.js', ['weavejs.util.BackwardsCompatibility'], ['weavejs.api.core.ILinkableHashMap']);
goog.addDependency('../../../weavejs/api/core/ILinkableHashMap.js', ['weavejs.api.core.ILinkableHashMap'], ['weavejs.api.core.ILinkableCompositeObject']);
goog.addDependency('../../../weavejs/core/ChildListCallbackInterface.js', ['weavejs.core.ChildListCallbackInterface'], ['weavejs.core.CallbackCollection', 'weavejs.api.core.IChildListCallbackInterface']);
goog.addDependency('../../../weavejs/api/core/IChildListCallbackInterface.js', ['weavejs.api.core.IChildListCallbackInterface'], ['weavejs.api.core.ICallbackCollection']);
goog.addDependency('../../../weavejs/core/CallbackCollection.js', ['weavejs.core.CallbackCollection'], ['weavejs.core.CallbackEntry', 'weavejs.core.GroupedCallbackEntry', 'weavejs.api.core.ICallbackCollection', 'weavejs.api.core.IDisposableObject']);
goog.addDependency('../../../weavejs/core/GroupedCallbackEntry.js', ['weavejs.core.GroupedCallbackEntry'], ['weavejs.core.CallbackEntry', 'weavejs.core.Scheduler', 'weavejs.util.Dictionary2D']);
goog.addDependency('../../../weavejs/util/Dictionary2D.js', ['weavejs.util.Dictionary2D'], []);
goog.addDependency('../../../weavejs/core/Scheduler.js', ['weavejs.core.Scheduler'], ['weavejs.util.DebugTimer', 'weavejs.util.DebugUtils', 'weavejs.util.StandardLib', 'weavejs.api.core.IDisposableObject', 'weavejs.api.core.IScheduler']);
goog.addDependency('../../../weavejs/util/DebugUtils.js', ['weavejs.util.DebugUtils'], ['weavejs.core.LinkableString', 'weavejs.core.LinkableVariable', 'weavejs.api.core.ILinkableCompositeObject']);
goog.addDependency('../../../weavejs/api/core/ILinkableCompositeObject.js', ['weavejs.api.core.ILinkableCompositeObject'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/core/LinkableString.js', ['weavejs.core.LinkableString'], ['weavejs.core.LinkableVariable']);
goog.addDependency('../../../weavejs/core/LinkableVariable.js', ['weavejs.core.LinkableVariable'], ['weavejs.core.CallbackCollection', 'weavejs.api.core.ICallbackCollection', 'weavejs.api.core.IDisposableObject', 'weavejs.api.core.ILinkableVariable']);
goog.addDependency('../../../weavejs/api/core/ILinkableVariable.js', ['weavejs.api.core.ILinkableVariable'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/util/DebugTimer.js', ['weavejs.util.DebugTimer'], ['weavejs.util.StandardLib']);
goog.addDependency('../../../weavejs/util/StandardLib.js', ['weavejs.util.StandardLib'], []);
goog.addDependency('../../../weavejs/core/CallbackEntry.js', ['weavejs.core.CallbackEntry'], ['weavejs.api.core.IDisposableObject']);
goog.addDependency('../../../weavejs/api/core/DynamicState.js', ['weavejs.api.core.DynamicState'], []);
goog.addDependency('../../../weavejs/core/EditorManager.js', ['weavejs.core.EditorManager'], ['weavejs.api.ui.IEditorManager']);
goog.addDependency('../../../weavejs/WeaveAPI.js', ['weavejs.WeaveAPI'], ['weavejs.core.ClassRegistryImpl', 'weavejs.api.core.IClassRegistry', 'weavejs.api.core.ILocaleManager', 'weavejs.api.core.IProgressIndicator', 'weavejs.api.core.IScheduler', 'weavejs.api.core.ISessionManager', 'weavejs.api.data.IAttributeColumnCache', 'weavejs.api.data.ICSVParser', 'weavejs.api.data.IProjectionManager', 'weavejs.api.data.IQualifiedKeyManager', 'weavejs.api.data.IStatisticsCache', 'weavejs.api.net.IURLRequestUtils', 'weavejs.api.ui.IEditorManager']);
goog.addDependency('../../../weavejs/api/ui/IEditorManager.js', ['weavejs.api.ui.IEditorManager'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/api/net/IURLRequestUtils.js', ['weavejs.api.net.IURLRequestUtils'], ['weavejs.util.WeavePromise']);
goog.addDependency('../../../weavejs/util/WeavePromise.js', ['weavejs.util.WeavePromise'], ['weavejs.util.WeavePromiseHandler', 'weavejs.api.core.IDisposableObject']);
goog.addDependency('../../../weavejs/api/core/IDisposableObject.js', ['weavejs.api.core.IDisposableObject'], []);
goog.addDependency('../../../weavejs/util/WeavePromiseHandler.js', ['weavejs.util.WeavePromiseHandler'], []);
goog.addDependency('../../../weavejs/api/data/IStatisticsCache.js', ['weavejs.api.data.IStatisticsCache'], ['weavejs.api.data.IColumnStatistics']);
goog.addDependency('../../../weavejs/api/data/IColumnStatistics.js', ['weavejs.api.data.IColumnStatistics'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/api/data/IQualifiedKeyManager.js', ['weavejs.api.data.IQualifiedKeyManager'], []);
goog.addDependency('../../../weavejs/api/data/IProjectionManager.js', ['weavejs.api.data.IProjectionManager'], ['weavejs.geom.Bounds2D', 'weavejs.geom.Point', 'weavejs.api.data.IProjector']);
goog.addDependency('../../../weavejs/api/data/IProjector.js', ['weavejs.api.data.IProjector'], []);
goog.addDependency('../../../weavejs/geom/Bounds2D.js', ['weavejs.geom.Bounds2D'], ['weavejs.geom.Point', 'weavejs.geom.Range', 'weavejs.geom.Rectangle']);
goog.addDependency('../../../weavejs/geom/Rectangle.js', ['weavejs.geom.Rectangle'], []);
goog.addDependency('../../../weavejs/geom/Range.js', ['weavejs.geom.Range'], []);
goog.addDependency('../../../weavejs/geom/Point.js', ['weavejs.geom.Point'], []);
goog.addDependency('../../../weavejs/api/data/ICSVParser.js', ['weavejs.api.data.ICSVParser'], []);
goog.addDependency('../../../weavejs/api/data/IAttributeColumnCache.js', ['weavejs.api.data.IAttributeColumnCache'], ['weavejs.api.data.IAttributeColumn', 'weavejs.api.data.IDataSource']);
goog.addDependency('../../../weavejs/api/data/IDataSource.js', ['weavejs.api.data.IDataSource'], ['weavejs.api.core.ILinkableObject', 'weavejs.api.data.IWeaveTreeNode']);
goog.addDependency('../../../weavejs/api/data/IWeaveTreeNode.js', ['weavejs.api.data.IWeaveTreeNode'], []);
goog.addDependency('../../../weavejs/api/data/IAttributeColumn.js', ['weavejs.api.data.IAttributeColumn'], ['weavejs.api.core.ICallbackCollection', 'weavejs.api.data.IKeySet', 'weavejs.api.data.IQualifiedKey']);
goog.addDependency('../../../weavejs/api/data/IKeySet.js', ['weavejs.api.data.IKeySet'], ['weavejs.api.data.IKeyFilter']);
goog.addDependency('../../../weavejs/api/data/IKeyFilter.js', ['weavejs.api.data.IKeyFilter'], ['weavejs.api.core.ILinkableObject', 'weavejs.api.data.IQualifiedKey']);
goog.addDependency('../../../weavejs/api/data/IQualifiedKey.js', ['weavejs.api.data.IQualifiedKey'], []);
goog.addDependency('../../../weavejs/api/core/ISessionManager.js', ['weavejs.api.core.ISessionManager'], ['weavejs.api.core.ICallbackCollection']);
goog.addDependency('../../../weavejs/api/core/ICallbackCollection.js', ['weavejs.api.core.ICallbackCollection'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/api/core/IScheduler.js', ['weavejs.api.core.IScheduler'], []);
goog.addDependency('../../../weavejs/api/core/IProgressIndicator.js', ['weavejs.api.core.IProgressIndicator'], ['weavejs.api.core.ILinkableObject']);
goog.addDependency('../../../weavejs/api/core/ILinkableObject.js', ['weavejs.api.core.ILinkableObject'], []);
goog.addDependency('../../../weavejs/api/core/ILocaleManager.js', ['weavejs.api.core.ILocaleManager'], []);
goog.addDependency('../../../weavejs/core/ClassRegistryImpl.js', ['weavejs.core.ClassRegistryImpl'], ['weavejs.util.JS', 'weavejs.api.core.IClassRegistry']);
goog.addDependency('../../../weavejs/api/core/IClassRegistry.js', ['weavejs.api.core.IClassRegistry'], []);
goog.addDependency('../../../weavejs/util/JS.js', ['weavejs.util.JS'], []);
		goog.require("WeaveJS");		
/* eslint-enable */
