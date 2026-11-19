'use strict';

// Hexo deep-merges `_config.cactus.yml` into `themes/cactus/_config.yml`, which
// would retain upstream `nav` keys (`about`, `articles`). Replace `nav` when
// overridden in `_config.cactus.yml` (or `theme_config`).
hexo.extend.filter.register('generateBefore', function () {
  const customNav = this.config.theme_config && this.config.theme_config.nav;
  if (customNav && typeof customNav === 'object') {
    this.theme.config.nav = customNav;
  }
});
