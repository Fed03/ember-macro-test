import { moduleFor, test } from 'ember-qunit';
import { make, manualSetup } from 'ember-data-factory-guy';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  needs: ['model:user'],
  beforeEach() {
    manualSetup(this.container);
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let user1 = make('user', {name: 'john'});
  let user2 = make('user', {name: 'jane'});
  let user3 = make('user', {name: 'joe'});
  let user4 = make('user', {name: 'johnny'});

  let model = [user1, user2, user3, user4];
  let controller = this.subject({ model });
  assert.deepEqual(controller.get('nameComputed'), ['john', 'jane', 'joe', 'johnny']);
});
