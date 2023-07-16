const assert = require('assert');

Feature('Unliking Resto');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('unliking one resto', async ({ I }) => {
  I.seeElement('.card-title');

  const sampleRestoButton = locate('.btn-menu').first();
  const sampleRestoTitle = await I.grabTextFrom('.card-title');
  I.click(sampleRestoButton);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-title');
  const likedRestoButton = locate('.btn-menu').first();
  const likedRestoTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(sampleRestoTitle, likedRestoTitle);

  I.click(likedRestoButton);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see("You don't have Favorite Restaurants", '#resto-list');
});
