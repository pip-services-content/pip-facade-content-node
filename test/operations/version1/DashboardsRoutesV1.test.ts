let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';

import { TestReferences } from '../../fixtures/TestReferences';
import { TestRestClient } from '../../fixtures/TestRestClient';
import { DashboardsOperationsV1 } from '../../../src/operations/version1/DashboardsOperationsV1';

suite('DashboardsOperationsV1', () => {
    let references: TestReferences;
    let rest: TestRestClient;

    setup((done) => {
        rest = new TestRestClient();
        references = new TestReferences();
        references.put(new Descriptor('pip-facade-content', 'operations', 'dashboards', 'default', '1.0'), new DashboardsOperationsV1())
        references.open(null, done);
    });

    teardown((done) => {
        references.close(null, done);
    });

    test('should get and set dashboards', (done) => {
        rest.get(
            '/api/1.0/dashboards/1/test/default',
            (err, req, res, dashboard) => {
                assert.isNull(err);

                assert.isObject(dashboard);
                assert.equal(dashboard.user_id, '1');
                assert.equal(dashboard.app, 'test');
                assert.equal(dashboard.kind, 'default');

                rest.post(
                    '/api/1.0/dashboards/1/test/default',
                    dashboard,
                    (err, req, res, dashboard1) => {
                        assert.isNull(err);

                        assert.isObject(dashboard1);
                        assert.equal(dashboard.id, dashboard1.id);
                        assert.equal(dashboard1.user_id, '1');
                        assert.equal(dashboard1.app, 'test');
                        assert.equal(dashboard1.kind, 'default');

                        done();
                    }
                );
            }
        );
    });

    test('should get dashboards', (done) => {
        rest.get(
            '/api/1.0/dashboards?paging=1&skip=0&take=2',
            (err, req, res, page) => {
                assert.isNull(err);

                assert.isObject(page);

                done();
            }
        );
    });

    test('should delete dashboards', (done) => {
        rest.del(
            '/api/1.0/dashboards?user_id=1',
            (err, req, res) => {
                assert.isNull(err);

                done();
            }
        );
    });

});