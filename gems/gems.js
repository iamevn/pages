const INIT_RANDOM = false;

const gem_upgrades = {
  'Chipped Ruby': 'Star Ruby',
  'Flawed Ruby': 'Star Ruby',
  'Ruby': 'Red Crystal',
  'Flawless Ruby': 'Yellow Sapphire',
  'Perfect Ruby': 'Blood Stone',

  'Chipped Topaz': 'Silver',
  'Flawed Topaz': 'Dark Emerald',
  'Topaz': 'Pink Diamond',
  'Flawless Topaz': 'Yellow Sapphire',
  'Perfect Topaz': 'Uranium 238',

  'Chipped Opal': 'Malachite',
  'Flawed Opal': 'Uranium 238',
  'Opal': 'Jade',
  'Flawless Opal': 'Paraiba Tourmaline',
  'Perfect Opal': 'Black Opal',

  'Chipped Sapphire': 'Silver',
  'Flawed Sapphire': 'Jade',
  'Sapphire': 'Uranium 238',
  'Flawless Sapphire': 'Dark Emerald',
  'Perfect Sapphire': 'Yellow Sapphire',

  'Chipped Amethyst': 'Star Ruby',
  'Flawed Amethyst': 'Red Crystal',
  'Amethyst': 'Blood Stone',
  'Flawless Amethyst': 'Gold',
  'Perfect Amethyst': 'Gold',

  'Chipped Emerald': 'Malachite',
  'Flawed Emerald': 'Paraiba Tourmaline',
  'Emerald': 'Jade',
  'Flawless Emerald': 'Red Crystal',
  'Perfect Emerald': 'Dark Emerald',

  'Chipped Aquamarine': 'Malachite',
  'Flawed Aquamarine': 'Paraiba Tourmaline',
  'Aquamarine': 'Black Opal',
  'Flawless Aquamarine': 'Blood Stone',
  'Perfect Aquamarine': 'Paraiba Tourmaline',

  'Chipped Diamond': 'Silver',
  'Flawed Diamond': 'Gold',
  'Diamond': 'Pink Diamond',
  'Flawless Diamond': 'Black Opal',
  'Perfect Diamond': 'Pink Diamond',
};

const upgrade_gems = {};
for (const gem in gem_upgrades) {
  const upgrade = gem_upgrades[gem];
  if (upgrade in upgrade_gems) {
    upgrade_gems[upgrade].push(gem);
  } else {
    upgrade_gems[upgrade] = [gem];
  }
}

const checkUpgrade = (upgradeElement) => {
  for (const ingredient of upgradeElement.getElementsByClassName('ingredient')) {
    if (ingredient.value > 0) {
      upgradeElement.hidden = false;
      return;
    }
  }
  upgradeElement.hidden = true;
};

const gen_gem = (name) => {
  const split = name.split(' ').map(s => s.toLowerCase());
  const gem = split.length === 2 ? split[1] : split[0];
  const quality = split.length === 2 ? split[0] : 'normal';

  const li = document.createElement('li');
  li.classList.add('gem', gem, quality);


  const nameLabel = document.createElement('div');
  nameLabel.classList.add('name-label', gem, quality);
  nameLabel.textContent = name;
  li.appendChild(nameLabel);

  const base = document.createElement('div');
  base.classList.add('split-base', gem, quality);
  li.appendChild(base);

  const minus = document.createElement('button');
  minus.classList.add('split-btn', 'split-minus', gem, quality);
  minus.textContent = '-';
  minus.onclick = (event) => {
    const count = document.getElementsByClassName(`split-count ${gem} ${quality}`)[0];
    if (count.textContent > 0) {
      count.textContent--;
      const upgrade_count = document.getElementsByClassName(`ingredient ${gem} ${quality}`)[0];
      upgrade_count.value = count.textContent;
      checkUpgrade(upgrade_count.parentElement.parentElement.parentElement);
    }
  }
  base.appendChild(minus);

  const labelCount = document.createElement('span');
  labelCount.classList.add('split-count', 'split-btn', gem, quality);
  labelCount.textContent = '0';
  if (INIT_RANDOM) {
    labelCount.textContent = Math.random() > 0.9 ? 1 : 0;
  }
  base.appendChild(labelCount);

  const plus = document.createElement('button');
  plus.classList.add('split-btn', 'split-plus', gem, quality);
  plus.textContent = '+';
  plus.onclick = (event) => {
    const count = document.getElementsByClassName(`split-count ${gem} ${quality}`)[0];
    count.textContent++;

    const upgrade_count = document.getElementsByClassName(`ingredient ${gem} ${quality}`)[0];
    upgrade_count.value = count.textContent;
    checkUpgrade(upgrade_count.parentElement.parentElement.parentElement);
  }
  base.appendChild(plus);

  return li;
}

const gems = document.getElementById('gems');
for (const gem in gem_upgrades) {
  gems.appendChild(gen_gem(gem));
}

const gen_upgrade = (name) => {
  const upgrade_li = document.createElement('li');
  upgrade_li.classList.add('upgrade');
  const label = document.createElement('label');
  label.textContent = name;
  const ul = document.createElement('ul');
  ul.classList.add('ingredients');
  label.appendChild(ul);

  for (const gem_name of upgrade_gems[name]) {
    const split = gem_name.split(' ').map(s => s.toLowerCase());
    const gem = split.length === 2 ? split[1] : split[0];
    const quality = split.length === 2 ? split[0] : 'normal';

    const li = document.createElement('li');
    li.classList.add(gem, quality, 'ingredient');
    li.textContent = gem_name;
    li.value = 0;
    if (INIT_RANDOM) {
      const countE = document.getElementsByClassName(`split-count ${gem} ${quality}`)[0];
      li.value = countE.textContent;
    }
    ul.appendChild(li);
  }

  upgrade_li.appendChild(label);
  const purchase = document.createElement('button');
  purchase.classList.add('purchase-btn')
  purchase.textContent = '[buy]';
  purchase.onclick = () => {
    console.log('unimpl')
  };
  upgrade_li.appendChild(purchase);
  upgrade_li.hidden = true;
  return upgrade_li;
}

const upgrades = document.getElementById('upgrades');
for (const upgrade in upgrade_gems) {
  upgrades.appendChild(gen_upgrade(upgrade));
}

for (const e of document.getElementsByClassName('upgrade')) {
  checkUpgrade(e);
}

// test data
const examples = () => {
	const example_selectors = [
  		'split-plus chipped ruby', 'split-plus flawed ruby', 
      'split-plus chipped amethyst', 'split-plus chipped diamond',
      'split-plus flawed sapphire',
  ];
  
  for (const example of example_selectors) {
  	document.getElementsByClassName(example)[0].click();
  }
};
examples();
