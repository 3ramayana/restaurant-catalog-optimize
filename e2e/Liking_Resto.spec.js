const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.see("You don't have Favorite Restaurants", '#resto-list');
});

Scenario('liking one resto', async ({ I }) => {
  I.see("You don't have Favorite Restaurants", '#resto-list');
  I.amOnPage('/#/resto');

  I.seeElement('.card-title');

  const sampleRestoButton = locate('.btn-menu').first();
  const sampleRestoTitle = await I.grabTextFrom('.card-title');
  I.click(sampleRestoButton);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-title');
  const likedRestoTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(sampleRestoTitle, likedRestoTitle);
});
