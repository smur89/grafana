import {ElasticDatasource} from './datasource';
import {ElasticQueryCtrl} from './query_ctrl';
import {ElasticConfigCtrl} from './config_ctrl';
import {ElasticDashboardCtrl} from './dashboard_ctrl';

class ElasticQueryOptionsCtrl {
  static templateUrl = 'partials/query.options.html';
}

class ElasticAnnotationsQueryCtrl {
  static templateUrl = 'partials/annotations.editor.html';
}

export {
  ElasticDatasource as Datasource,
  ElasticQueryCtrl as QueryCtrl,
  ElasticConfigCtrl as ConfigCtrl,
  ElasticQueryOptionsCtrl as QueryOptionsCtrl,
  ElasticAnnotationsQueryCtrl as AnnotationsQueryCtrl,
  ElasticDashboardCtrl as DashboardCtrl,
};
