import { moduleFor, test } from "ember-qunit";
import Ember from "ember";

moduleFor("controller:application", "Unit | Controller | application", {
  // Specify the other units that are required for this test.
  needs: ["model:user", "model:post"],
  beforeEach() {
    this.store = this.container.lookup("service:store");
  }
});

// Replace this with your real tests.
test("it exists", function(assert) {
  Ember.run(() => {
    let post1 = this.store.createRecord("post", { title: "foo" });
    let post2 = this.store.createRecord("post", { title: "bar" });
    let post3 = this.store.createRecord("post", { title: "baz" });

    let model = this.store.createRecord("user", {
      posts: [post1, post2, post3]
    });
    let controller = this.subject({ model });
    assert.deepEqual(controller.get("nameComputed"), ["foo", "bar", "baz"]);
  });
});
