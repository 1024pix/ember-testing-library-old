const toto = require('ember-cli-htmlbars');
const assert = require('assert');
const { getScreen, render } = require('../index');

describe('Testing library wrapper', function() {
  describe('getScreen', function() {
    it('wrap an Ember component with Testing library', async function() {
      console.log(toto)
      const component = await render(toto.hbs`
        <div>
          Hello World 
        </div>
      `);

      const { getByText } = getScreen();
      assert.equal(Boolean(getByText('Hello World')), true);
    });
  });
});
