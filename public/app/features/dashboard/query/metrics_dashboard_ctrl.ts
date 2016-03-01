///<reference path="../../../headers/common.d.ts" />

import config from 'app/core/config';
import angular from 'angular';
import _ from 'lodash';
import $ from 'jquery';
import kbn from 'app/core/utils/kbn';
import {DashboardCtrl} from './dashboard_ctrl';

import * as rangeUtil from 'app/core/utils/rangeutil';
import * as dateMath from 'app/core/utils/datemath';

export class MetricsDashboardCtrl {
  annotations: any;
  variables: any;
  dashboard: any;
  error: boolean;
  loading: boolean;
  datasource: any;
  $scope: any;
  $injector: any;
  $q: any;
  $timeout: any;
  datasourceSrv: any;
  timeSrv: any;
  timing: any;
  range: any;
  rangeRaw: any;
  interval: any;
  resolution: any;
  timeInfo: any;
  skipDataOnInit: boolean;

  constructor($scope, $injector) {
    this.$injector = $injector;
    this.$scope = $scope;
    this.$q = $injector.get('$q');
    this.datasourceSrv = $injector.get('datasourceSrv');
    this.timeSrv = $injector.get('timeSrv');
    this.setDatasource();

    if (!this.dashboard.targets) {
      this.dashboard.targets = [{}];
    }

    $scope.$on("refresh", () => this.refresh());
  }

  refreshData(data) {
    // null op
    return this.$q.when(data);
  }

   refresh() {
     return;
  }

  setDatasource() {
     this.datasource = config.defaultDatasource;
     this.dashboard.datasource = config.defaultDatasource;
  }

  addDataQuery() {
    var target = {
      datasource: this.datasource
    };
    this.dashboard.targets.push(target);
  }
}

export function dashboardQueryDirective() {
  return {
        restrict: 'E',
        templateUrl: 'public/app/features/dashboard/query/dashboardQuery.html',
        controller: MetricsDashboardCtrl,
        bindToController: true,
        controllerAs: 'ctrl',
        scope: {
          dashboard: "=",
        }
      };
}

angular.module('grafana.directives').directive('dashboardQuery', dashboardQueryDirective);
