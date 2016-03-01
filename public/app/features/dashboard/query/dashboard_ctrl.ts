///<reference path="../../../headers/common.d.ts" />

import angular from 'angular';
import _ from 'lodash';

export class DashboardCtrl {
  target: any;
  datasource: any;
  dashboardCtrl: any;
  dashboard: any;
  hasRawMode: boolean;
  error: string;

  constructor(public $scope, private $injector) {
    this.dashboard = this.dashboardCtrl.dashboard;

    if (!this.target.refId) {
      this.target.refId = this.getNextQueryLetter();
    }
  }

  getNextQueryLetter() {
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return _.find(letters, refId => {
      return _.every(this.dashboard.targets, function(other) {
        return other.refId !== refId;
      });
    });
  }

  removeQuery() {
    this.dashboard.targets = _.without(this.dashboard.targets, this.target);
    this.dashboardCtrl.refresh();
  };

  duplicateQuery() {
    var clone = angular.copy(this.target);
    clone.refId = this.getNextQueryLetter();
    this.dashboard.targets.push(clone);
  }

  moveQuery(direction) {
    var index = _.indexOf(this.dashboard.targets, this.target);
    _.move(this.dashboard.targets, index, index + direction);
  }

  refresh() {
    this.dashboardCtrl.refresh();
  }

  toggleHideQuery() {
    this.target.hide = !this.target.hide;
    this.dashboardCtrl.refresh();
  }
}

