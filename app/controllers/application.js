import Ember from 'ember';
import { mapBy } from 'ember-awesome-macros/array';
import raw from 'ember-macro-helpers/raw';

export default Ember.Controller.extend({
  nameComputed: mapBy('model', raw('name'))
});
