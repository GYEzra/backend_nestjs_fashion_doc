'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend_nestjs_fruit documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddressesModule.html" data-type="entity-link" >AddressesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AddressesModule-65e9b6a77ae9dd0ef4cce6baa273b79b26504f30a5403613927d45c0edc39edf317da48d47e0ad1e81997f45b8465267e91c510d923706ee51dff796e41a60cb"' : 'data-bs-target="#xs-controllers-links-module-AddressesModule-65e9b6a77ae9dd0ef4cce6baa273b79b26504f30a5403613927d45c0edc39edf317da48d47e0ad1e81997f45b8465267e91c510d923706ee51dff796e41a60cb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AddressesModule-65e9b6a77ae9dd0ef4cce6baa273b79b26504f30a5403613927d45c0edc39edf317da48d47e0ad1e81997f45b8465267e91c510d923706ee51dff796e41a60cb"' :
                                            'id="xs-controllers-links-module-AddressesModule-65e9b6a77ae9dd0ef4cce6baa273b79b26504f30a5403613927d45c0edc39edf317da48d47e0ad1e81997f45b8465267e91c510d923706ee51dff796e41a60cb"' }>
                                            <li class="link">
                                                <a href="controllers/AddressesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AddressesModule-65e9b6a77ae9dd0ef4cce6baa273b79b26504f30a5403613927d45c0edc39edf317da48d47e0ad1e81997f45b8465267e91c510d923706ee51dff796e41a60cb"' : 'data-bs-target="#xs-injectables-links-module-AddressesModule-65e9b6a77ae9dd0ef4cce6baa273b79b26504f30a5403613927d45c0edc39edf317da48d47e0ad1e81997f45b8465267e91c510d923706ee51dff796e41a60cb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AddressesModule-65e9b6a77ae9dd0ef4cce6baa273b79b26504f30a5403613927d45c0edc39edf317da48d47e0ad1e81997f45b8465267e91c510d923706ee51dff796e41a60cb"' :
                                        'id="xs-injectables-links-module-AddressesModule-65e9b6a77ae9dd0ef4cce6baa273b79b26504f30a5403613927d45c0edc39edf317da48d47e0ad1e81997f45b8465267e91c510d923706ee51dff796e41a60cb"' }>
                                        <li class="link">
                                            <a href="injectables/AddressesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-e7de7637950945209630c0ae79c17543bc666984827ba838441cbb82d5fa7adc233615178be27d15f83bb7261159be9f3c2abf6915ad42e49f4520a5baca9736"' : 'data-bs-target="#xs-controllers-links-module-AppModule-e7de7637950945209630c0ae79c17543bc666984827ba838441cbb82d5fa7adc233615178be27d15f83bb7261159be9f3c2abf6915ad42e49f4520a5baca9736"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-e7de7637950945209630c0ae79c17543bc666984827ba838441cbb82d5fa7adc233615178be27d15f83bb7261159be9f3c2abf6915ad42e49f4520a5baca9736"' :
                                            'id="xs-controllers-links-module-AppModule-e7de7637950945209630c0ae79c17543bc666984827ba838441cbb82d5fa7adc233615178be27d15f83bb7261159be9f3c2abf6915ad42e49f4520a5baca9736"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-e7de7637950945209630c0ae79c17543bc666984827ba838441cbb82d5fa7adc233615178be27d15f83bb7261159be9f3c2abf6915ad42e49f4520a5baca9736"' : 'data-bs-target="#xs-injectables-links-module-AppModule-e7de7637950945209630c0ae79c17543bc666984827ba838441cbb82d5fa7adc233615178be27d15f83bb7261159be9f3c2abf6915ad42e49f4520a5baca9736"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e7de7637950945209630c0ae79c17543bc666984827ba838441cbb82d5fa7adc233615178be27d15f83bb7261159be9f3c2abf6915ad42e49f4520a5baca9736"' :
                                        'id="xs-injectables-links-module-AppModule-e7de7637950945209630c0ae79c17543bc666984827ba838441cbb82d5fa7adc233615178be27d15f83bb7261159be9f3c2abf6915ad42e49f4520a5baca9736"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CartExistsRule.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartExistsRule</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductExistsRule.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductExistsRule</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-4441addf31e012b0d39cad53c7b9858d0f4abf01d3a4859bbbd20298f678828f038d22f1781daa362d6d5c5d40800cc274ea92e5602210ed74a037b4d5917949"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-4441addf31e012b0d39cad53c7b9858d0f4abf01d3a4859bbbd20298f678828f038d22f1781daa362d6d5c5d40800cc274ea92e5602210ed74a037b4d5917949"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-4441addf31e012b0d39cad53c7b9858d0f4abf01d3a4859bbbd20298f678828f038d22f1781daa362d6d5c5d40800cc274ea92e5602210ed74a037b4d5917949"' :
                                            'id="xs-controllers-links-module-AuthModule-4441addf31e012b0d39cad53c7b9858d0f4abf01d3a4859bbbd20298f678828f038d22f1781daa362d6d5c5d40800cc274ea92e5602210ed74a037b4d5917949"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-4441addf31e012b0d39cad53c7b9858d0f4abf01d3a4859bbbd20298f678828f038d22f1781daa362d6d5c5d40800cc274ea92e5602210ed74a037b4d5917949"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-4441addf31e012b0d39cad53c7b9858d0f4abf01d3a4859bbbd20298f678828f038d22f1781daa362d6d5c5d40800cc274ea92e5602210ed74a037b4d5917949"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-4441addf31e012b0d39cad53c7b9858d0f4abf01d3a4859bbbd20298f678828f038d22f1781daa362d6d5c5d40800cc274ea92e5602210ed74a037b4d5917949"' :
                                        'id="xs-injectables-links-module-AuthModule-4441addf31e012b0d39cad53c7b9858d0f4abf01d3a4859bbbd20298f678828f038d22f1781daa362d6d5c5d40800cc274ea92e5602210ed74a037b4d5917949"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartsModule.html" data-type="entity-link" >CartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CartsModule-3f0836b3cf6898397a752e241aff2bf58530a4a64606df1b4eb628cacfe639a7a10b8f72fefbb0ee3bfb1c29796ca6aacc9dc1f95bfc40167a07927fd825b585"' : 'data-bs-target="#xs-controllers-links-module-CartsModule-3f0836b3cf6898397a752e241aff2bf58530a4a64606df1b4eb628cacfe639a7a10b8f72fefbb0ee3bfb1c29796ca6aacc9dc1f95bfc40167a07927fd825b585"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartsModule-3f0836b3cf6898397a752e241aff2bf58530a4a64606df1b4eb628cacfe639a7a10b8f72fefbb0ee3bfb1c29796ca6aacc9dc1f95bfc40167a07927fd825b585"' :
                                            'id="xs-controllers-links-module-CartsModule-3f0836b3cf6898397a752e241aff2bf58530a4a64606df1b4eb628cacfe639a7a10b8f72fefbb0ee3bfb1c29796ca6aacc9dc1f95bfc40167a07927fd825b585"' }>
                                            <li class="link">
                                                <a href="controllers/CartsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CartsModule-3f0836b3cf6898397a752e241aff2bf58530a4a64606df1b4eb628cacfe639a7a10b8f72fefbb0ee3bfb1c29796ca6aacc9dc1f95bfc40167a07927fd825b585"' : 'data-bs-target="#xs-injectables-links-module-CartsModule-3f0836b3cf6898397a752e241aff2bf58530a4a64606df1b4eb628cacfe639a7a10b8f72fefbb0ee3bfb1c29796ca6aacc9dc1f95bfc40167a07927fd825b585"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartsModule-3f0836b3cf6898397a752e241aff2bf58530a4a64606df1b4eb628cacfe639a7a10b8f72fefbb0ee3bfb1c29796ca6aacc9dc1f95bfc40167a07927fd825b585"' :
                                        'id="xs-injectables-links-module-CartsModule-3f0836b3cf6898397a752e241aff2bf58530a4a64606df1b4eb628cacfe639a7a10b8f72fefbb0ee3bfb1c29796ca6aacc9dc1f95bfc40167a07927fd825b585"' }>
                                        <li class="link">
                                            <a href="injectables/CartsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoriesModule-1ae96bdfb313f9cbf468b510760f1d91b846496362dc47bb8eaf771c7fd2b53a6a3497dc067871bbb97cb1c59b33715cc700be92e60a34b0f248e44dbb0def43"' : 'data-bs-target="#xs-controllers-links-module-CategoriesModule-1ae96bdfb313f9cbf468b510760f1d91b846496362dc47bb8eaf771c7fd2b53a6a3497dc067871bbb97cb1c59b33715cc700be92e60a34b0f248e44dbb0def43"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-1ae96bdfb313f9cbf468b510760f1d91b846496362dc47bb8eaf771c7fd2b53a6a3497dc067871bbb97cb1c59b33715cc700be92e60a34b0f248e44dbb0def43"' :
                                            'id="xs-controllers-links-module-CategoriesModule-1ae96bdfb313f9cbf468b510760f1d91b846496362dc47bb8eaf771c7fd2b53a6a3497dc067871bbb97cb1c59b33715cc700be92e60a34b0f248e44dbb0def43"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriesModule-1ae96bdfb313f9cbf468b510760f1d91b846496362dc47bb8eaf771c7fd2b53a6a3497dc067871bbb97cb1c59b33715cc700be92e60a34b0f248e44dbb0def43"' : 'data-bs-target="#xs-injectables-links-module-CategoriesModule-1ae96bdfb313f9cbf468b510760f1d91b846496362dc47bb8eaf771c7fd2b53a6a3497dc067871bbb97cb1c59b33715cc700be92e60a34b0f248e44dbb0def43"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-1ae96bdfb313f9cbf468b510760f1d91b846496362dc47bb8eaf771c7fd2b53a6a3497dc067871bbb97cb1c59b33715cc700be92e60a34b0f248e44dbb0def43"' :
                                        'id="xs-injectables-links-module-CategoriesModule-1ae96bdfb313f9cbf468b510760f1d91b846496362dc47bb8eaf771c7fd2b53a6a3497dc067871bbb97cb1c59b33715cc700be92e60a34b0f248e44dbb0def43"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabaseModule-c08532c25c08a3c6ea145d705d43bc981660f6afaf2dbf12012e506ce88526815ef4a59393bb796c626ecfd676c4416bb5a6f6abdc7d80b68ec7e7f944ba4ebe"' : 'data-bs-target="#xs-controllers-links-module-DatabaseModule-c08532c25c08a3c6ea145d705d43bc981660f6afaf2dbf12012e506ce88526815ef4a59393bb796c626ecfd676c4416bb5a6f6abdc7d80b68ec7e7f944ba4ebe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabaseModule-c08532c25c08a3c6ea145d705d43bc981660f6afaf2dbf12012e506ce88526815ef4a59393bb796c626ecfd676c4416bb5a6f6abdc7d80b68ec7e7f944ba4ebe"' :
                                            'id="xs-controllers-links-module-DatabaseModule-c08532c25c08a3c6ea145d705d43bc981660f6afaf2dbf12012e506ce88526815ef4a59393bb796c626ecfd676c4416bb5a6f6abdc7d80b68ec7e7f944ba4ebe"' }>
                                            <li class="link">
                                                <a href="controllers/DatabaseController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabaseModule-c08532c25c08a3c6ea145d705d43bc981660f6afaf2dbf12012e506ce88526815ef4a59393bb796c626ecfd676c4416bb5a6f6abdc7d80b68ec7e7f944ba4ebe"' : 'data-bs-target="#xs-injectables-links-module-DatabaseModule-c08532c25c08a3c6ea145d705d43bc981660f6afaf2dbf12012e506ce88526815ef4a59393bb796c626ecfd676c4416bb5a6f6abdc7d80b68ec7e7f944ba4ebe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-c08532c25c08a3c6ea145d705d43bc981660f6afaf2dbf12012e506ce88526815ef4a59393bb796c626ecfd676c4416bb5a6f6abdc7d80b68ec7e7f944ba4ebe"' :
                                        'id="xs-injectables-links-module-DatabaseModule-c08532c25c08a3c6ea145d705d43bc981660f6afaf2dbf12012e506ce88526815ef4a59393bb796c626ecfd676c4416bb5a6f6abdc7d80b68ec7e7f944ba4ebe"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-38c40cb9dcf3828b8c3348e9df4df9d214bd0ddfe412856d1ee621d2920c96e5d46ef379e0a448ed07f315ec9835e57a012471a55bc8848bc24b87482cf257b5"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-38c40cb9dcf3828b8c3348e9df4df9d214bd0ddfe412856d1ee621d2920c96e5d46ef379e0a448ed07f315ec9835e57a012471a55bc8848bc24b87482cf257b5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-38c40cb9dcf3828b8c3348e9df4df9d214bd0ddfe412856d1ee621d2920c96e5d46ef379e0a448ed07f315ec9835e57a012471a55bc8848bc24b87482cf257b5"' :
                                            'id="xs-controllers-links-module-FilesModule-38c40cb9dcf3828b8c3348e9df4df9d214bd0ddfe412856d1ee621d2920c96e5d46ef379e0a448ed07f315ec9835e57a012471a55bc8848bc24b87482cf257b5"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-38c40cb9dcf3828b8c3348e9df4df9d214bd0ddfe412856d1ee621d2920c96e5d46ef379e0a448ed07f315ec9835e57a012471a55bc8848bc24b87482cf257b5"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-38c40cb9dcf3828b8c3348e9df4df9d214bd0ddfe412856d1ee621d2920c96e5d46ef379e0a448ed07f315ec9835e57a012471a55bc8848bc24b87482cf257b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-38c40cb9dcf3828b8c3348e9df4df9d214bd0ddfe412856d1ee621d2920c96e5d46ef379e0a448ed07f315ec9835e57a012471a55bc8848bc24b87482cf257b5"' :
                                        'id="xs-injectables-links-module-FilesModule-38c40cb9dcf3828b8c3348e9df4df9d214bd0ddfe412856d1ee621d2920c96e5d46ef379e0a448ed07f315ec9835e57a012471a55bc8848bc24b87482cf257b5"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrdersModule-de9a10f2740b263c8b3eaf613716cf3d85f56537c0483dad0480aa1529724ff73520b3330ef94704c97133a2ec4b630c48157eb6607c75af4c754261c5ef7695"' : 'data-bs-target="#xs-controllers-links-module-OrdersModule-de9a10f2740b263c8b3eaf613716cf3d85f56537c0483dad0480aa1529724ff73520b3330ef94704c97133a2ec4b630c48157eb6607c75af4c754261c5ef7695"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-de9a10f2740b263c8b3eaf613716cf3d85f56537c0483dad0480aa1529724ff73520b3330ef94704c97133a2ec4b630c48157eb6607c75af4c754261c5ef7695"' :
                                            'id="xs-controllers-links-module-OrdersModule-de9a10f2740b263c8b3eaf613716cf3d85f56537c0483dad0480aa1529724ff73520b3330ef94704c97133a2ec4b630c48157eb6607c75af4c754261c5ef7695"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrdersModule-de9a10f2740b263c8b3eaf613716cf3d85f56537c0483dad0480aa1529724ff73520b3330ef94704c97133a2ec4b630c48157eb6607c75af4c754261c5ef7695"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-de9a10f2740b263c8b3eaf613716cf3d85f56537c0483dad0480aa1529724ff73520b3330ef94704c97133a2ec4b630c48157eb6607c75af4c754261c5ef7695"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-de9a10f2740b263c8b3eaf613716cf3d85f56537c0483dad0480aa1529724ff73520b3330ef94704c97133a2ec4b630c48157eb6607c75af4c754261c5ef7695"' :
                                        'id="xs-injectables-links-module-OrdersModule-de9a10f2740b263c8b3eaf613716cf3d85f56537c0483dad0480aa1529724ff73520b3330ef94704c97133a2ec4b630c48157eb6607c75af4c754261c5ef7695"' }>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-bf4a604d335969e203b91df75a3cb789220b8cfb4a589a773c17f37fc5195125ad6b8b16db0ccfffb1f74eec26973c3c128a407330e88bbbfc9402140aa1f62b"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-bf4a604d335969e203b91df75a3cb789220b8cfb4a589a773c17f37fc5195125ad6b8b16db0ccfffb1f74eec26973c3c128a407330e88bbbfc9402140aa1f62b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-bf4a604d335969e203b91df75a3cb789220b8cfb4a589a773c17f37fc5195125ad6b8b16db0ccfffb1f74eec26973c3c128a407330e88bbbfc9402140aa1f62b"' :
                                            'id="xs-controllers-links-module-PermissionsModule-bf4a604d335969e203b91df75a3cb789220b8cfb4a589a773c17f37fc5195125ad6b8b16db0ccfffb1f74eec26973c3c128a407330e88bbbfc9402140aa1f62b"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-bf4a604d335969e203b91df75a3cb789220b8cfb4a589a773c17f37fc5195125ad6b8b16db0ccfffb1f74eec26973c3c128a407330e88bbbfc9402140aa1f62b"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-bf4a604d335969e203b91df75a3cb789220b8cfb4a589a773c17f37fc5195125ad6b8b16db0ccfffb1f74eec26973c3c128a407330e88bbbfc9402140aa1f62b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-bf4a604d335969e203b91df75a3cb789220b8cfb4a589a773c17f37fc5195125ad6b8b16db0ccfffb1f74eec26973c3c128a407330e88bbbfc9402140aa1f62b"' :
                                        'id="xs-injectables-links-module-PermissionsModule-bf4a604d335969e203b91df75a3cb789220b8cfb4a589a773c17f37fc5195125ad6b8b16db0ccfffb1f74eec26973c3c128a407330e88bbbfc9402140aa1f62b"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-5d73217a1d1cd2d5ec2b347787bd5f63dec90b9bb1c767b6ee64679ed44eeaff684f840440d748cf33f19387746948fa61c31723e4c8797b7f9d128ff22343b1"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-5d73217a1d1cd2d5ec2b347787bd5f63dec90b9bb1c767b6ee64679ed44eeaff684f840440d748cf33f19387746948fa61c31723e4c8797b7f9d128ff22343b1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-5d73217a1d1cd2d5ec2b347787bd5f63dec90b9bb1c767b6ee64679ed44eeaff684f840440d748cf33f19387746948fa61c31723e4c8797b7f9d128ff22343b1"' :
                                            'id="xs-controllers-links-module-ProductsModule-5d73217a1d1cd2d5ec2b347787bd5f63dec90b9bb1c767b6ee64679ed44eeaff684f840440d748cf33f19387746948fa61c31723e4c8797b7f9d128ff22343b1"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-5d73217a1d1cd2d5ec2b347787bd5f63dec90b9bb1c767b6ee64679ed44eeaff684f840440d748cf33f19387746948fa61c31723e4c8797b7f9d128ff22343b1"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-5d73217a1d1cd2d5ec2b347787bd5f63dec90b9bb1c767b6ee64679ed44eeaff684f840440d748cf33f19387746948fa61c31723e4c8797b7f9d128ff22343b1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-5d73217a1d1cd2d5ec2b347787bd5f63dec90b9bb1c767b6ee64679ed44eeaff684f840440d748cf33f19387746948fa61c31723e4c8797b7f9d128ff22343b1"' :
                                        'id="xs-injectables-links-module-ProductsModule-5d73217a1d1cd2d5ec2b347787bd5f63dec90b9bb1c767b6ee64679ed44eeaff684f840440d748cf33f19387746948fa61c31723e4c8797b7f9d128ff22343b1"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PromotionsModule.html" data-type="entity-link" >PromotionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PromotionsModule-173372f6274579e53ce085f386ce5560596358125c5a43f31723e4f2f53547d4ced3cdeb5b97ba948eeaf170aac414f9f43e47161c1763779685c2c204ed23c8"' : 'data-bs-target="#xs-controllers-links-module-PromotionsModule-173372f6274579e53ce085f386ce5560596358125c5a43f31723e4f2f53547d4ced3cdeb5b97ba948eeaf170aac414f9f43e47161c1763779685c2c204ed23c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PromotionsModule-173372f6274579e53ce085f386ce5560596358125c5a43f31723e4f2f53547d4ced3cdeb5b97ba948eeaf170aac414f9f43e47161c1763779685c2c204ed23c8"' :
                                            'id="xs-controllers-links-module-PromotionsModule-173372f6274579e53ce085f386ce5560596358125c5a43f31723e4f2f53547d4ced3cdeb5b97ba948eeaf170aac414f9f43e47161c1763779685c2c204ed23c8"' }>
                                            <li class="link">
                                                <a href="controllers/PromotionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromotionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PromotionsModule-173372f6274579e53ce085f386ce5560596358125c5a43f31723e4f2f53547d4ced3cdeb5b97ba948eeaf170aac414f9f43e47161c1763779685c2c204ed23c8"' : 'data-bs-target="#xs-injectables-links-module-PromotionsModule-173372f6274579e53ce085f386ce5560596358125c5a43f31723e4f2f53547d4ced3cdeb5b97ba948eeaf170aac414f9f43e47161c1763779685c2c204ed23c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PromotionsModule-173372f6274579e53ce085f386ce5560596358125c5a43f31723e4f2f53547d4ced3cdeb5b97ba948eeaf170aac414f9f43e47161c1763779685c2c204ed23c8"' :
                                        'id="xs-injectables-links-module-PromotionsModule-173372f6274579e53ce085f386ce5560596358125c5a43f31723e4f2f53547d4ced3cdeb5b97ba948eeaf170aac414f9f43e47161c1763779685c2c204ed23c8"' }>
                                        <li class="link">
                                            <a href="injectables/PromotionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromotionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReviewsModule.html" data-type="entity-link" >ReviewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ReviewsModule-4150c7b90b131ad94771e58b5f016ce7f9e3cd27f949bc53b315f4bf03feeaf92c6733fb67789638f7b0eb9aba17f1bedc59d772c4d38d2db8bb5f9a0299eb50"' : 'data-bs-target="#xs-controllers-links-module-ReviewsModule-4150c7b90b131ad94771e58b5f016ce7f9e3cd27f949bc53b315f4bf03feeaf92c6733fb67789638f7b0eb9aba17f1bedc59d772c4d38d2db8bb5f9a0299eb50"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReviewsModule-4150c7b90b131ad94771e58b5f016ce7f9e3cd27f949bc53b315f4bf03feeaf92c6733fb67789638f7b0eb9aba17f1bedc59d772c4d38d2db8bb5f9a0299eb50"' :
                                            'id="xs-controllers-links-module-ReviewsModule-4150c7b90b131ad94771e58b5f016ce7f9e3cd27f949bc53b315f4bf03feeaf92c6733fb67789638f7b0eb9aba17f1bedc59d772c4d38d2db8bb5f9a0299eb50"' }>
                                            <li class="link">
                                                <a href="controllers/ReviewsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ReviewsModule-4150c7b90b131ad94771e58b5f016ce7f9e3cd27f949bc53b315f4bf03feeaf92c6733fb67789638f7b0eb9aba17f1bedc59d772c4d38d2db8bb5f9a0299eb50"' : 'data-bs-target="#xs-injectables-links-module-ReviewsModule-4150c7b90b131ad94771e58b5f016ce7f9e3cd27f949bc53b315f4bf03feeaf92c6733fb67789638f7b0eb9aba17f1bedc59d772c4d38d2db8bb5f9a0299eb50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReviewsModule-4150c7b90b131ad94771e58b5f016ce7f9e3cd27f949bc53b315f4bf03feeaf92c6733fb67789638f7b0eb9aba17f1bedc59d772c4d38d2db8bb5f9a0299eb50"' :
                                        'id="xs-injectables-links-module-ReviewsModule-4150c7b90b131ad94771e58b5f016ce7f9e3cd27f949bc53b315f4bf03feeaf92c6733fb67789638f7b0eb9aba17f1bedc59d772c4d38d2db8bb5f9a0299eb50"' }>
                                        <li class="link">
                                            <a href="injectables/ReviewsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReviewsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-dea62d713e117f52d97e25c81ccb8578b8b9afbf433e4f0a1bc7015073a1059a3ab854cb3ae0bd7b8b5c2f2f56e84975083ab61d38238d044609779342fefd43"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-dea62d713e117f52d97e25c81ccb8578b8b9afbf433e4f0a1bc7015073a1059a3ab854cb3ae0bd7b8b5c2f2f56e84975083ab61d38238d044609779342fefd43"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-dea62d713e117f52d97e25c81ccb8578b8b9afbf433e4f0a1bc7015073a1059a3ab854cb3ae0bd7b8b5c2f2f56e84975083ab61d38238d044609779342fefd43"' :
                                            'id="xs-controllers-links-module-RolesModule-dea62d713e117f52d97e25c81ccb8578b8b9afbf433e4f0a1bc7015073a1059a3ab854cb3ae0bd7b8b5c2f2f56e84975083ab61d38238d044609779342fefd43"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-dea62d713e117f52d97e25c81ccb8578b8b9afbf433e4f0a1bc7015073a1059a3ab854cb3ae0bd7b8b5c2f2f56e84975083ab61d38238d044609779342fefd43"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-dea62d713e117f52d97e25c81ccb8578b8b9afbf433e4f0a1bc7015073a1059a3ab854cb3ae0bd7b8b5c2f2f56e84975083ab61d38238d044609779342fefd43"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-dea62d713e117f52d97e25c81ccb8578b8b9afbf433e4f0a1bc7015073a1059a3ab854cb3ae0bd7b8b5c2f2f56e84975083ab61d38238d044609779342fefd43"' :
                                        'id="xs-injectables-links-module-RolesModule-dea62d713e117f52d97e25c81ccb8578b8b9afbf433e4f0a1bc7015073a1059a3ab854cb3ae0bd7b8b5c2f2f56e84975083ab61d38238d044609779342fefd43"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-eeddf719ff71a20c5c11f8bdf7256e5885f8628da254b3fc7a1579742f86fb07fba914106574f5ac7f08341866ab1fc75e75194d3510f4b8214c3a2a3efdeb2c"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-eeddf719ff71a20c5c11f8bdf7256e5885f8628da254b3fc7a1579742f86fb07fba914106574f5ac7f08341866ab1fc75e75194d3510f4b8214c3a2a3efdeb2c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-eeddf719ff71a20c5c11f8bdf7256e5885f8628da254b3fc7a1579742f86fb07fba914106574f5ac7f08341866ab1fc75e75194d3510f4b8214c3a2a3efdeb2c"' :
                                            'id="xs-controllers-links-module-UsersModule-eeddf719ff71a20c5c11f8bdf7256e5885f8628da254b3fc7a1579742f86fb07fba914106574f5ac7f08341866ab1fc75e75194d3510f4b8214c3a2a3efdeb2c"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-eeddf719ff71a20c5c11f8bdf7256e5885f8628da254b3fc7a1579742f86fb07fba914106574f5ac7f08341866ab1fc75e75194d3510f4b8214c3a2a3efdeb2c"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-eeddf719ff71a20c5c11f8bdf7256e5885f8628da254b3fc7a1579742f86fb07fba914106574f5ac7f08341866ab1fc75e75194d3510f4b8214c3a2a3efdeb2c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-eeddf719ff71a20c5c11f8bdf7256e5885f8628da254b3fc7a1579742f86fb07fba914106574f5ac7f08341866ab1fc75e75194d3510f4b8214c3a2a3efdeb2c"' :
                                        'id="xs-injectables-links-module-UsersModule-eeddf719ff71a20c5c11f8bdf7256e5885f8628da254b3fc7a1579742f86fb07fba914106574f5ac7f08341866ab1fc75e75194d3510f4b8214c3a2a3efdeb2c"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AddressesController.html" data-type="entity-link" >AddressesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CartsController.html" data-type="entity-link" >CartsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriesController.html" data-type="entity-link" >CategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabaseController.html" data-type="entity-link" >DatabaseController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrdersController.html" data-type="entity-link" >OrdersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PromotionsController.html" data-type="entity-link" >PromotionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ReviewsController.html" data-type="entity-link" >ReviewsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApplyAddressDto.html" data-type="entity-link" >ApplyAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApplyPromotionDto.html" data-type="entity-link" >ApplyPromotionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartItemDto.html" data-type="entity-link" >CartItemDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAddressDto.html" data-type="entity-link" >CreateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCartDto.html" data-type="entity-link" >CreateCartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePromotionDto.html" data-type="entity-link" >CreatePromotionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReviewDto.html" data-type="entity-link" >CreateReviewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileUploadDto.html" data-type="entity-link" >FileUploadDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Promotion.html" data-type="entity-link" >Promotion</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryDto.html" data-type="entity-link" >QueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveCartItemsDto.html" data-type="entity-link" >RemoveCartItemsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Review.html" data-type="entity-link" >Review</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAddressDto.html" data-type="entity-link" >UpdateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderDto.html" data-type="entity-link" >UpdateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOrderStatusDto.html" data-type="entity-link" >UpdateOrderStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePaymentStatusDto.html" data-type="entity-link" >UpdatePaymentStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePromotionDto.html" data-type="entity-link" >UpdatePromotionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReviewDto.html" data-type="entity-link" >UpdateReviewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utils.html" data-type="entity-link" >Utils</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddressesService.html" data-type="entity-link" >AddressesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartExistsRule.html" data-type="entity-link" >CartExistsRule</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartsService.html" data-type="entity-link" >CartsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link" >DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductExistsRule.html" data-type="entity-link" >ProductExistsRule</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromotionsService.html" data-type="entity-link" >PromotionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReviewsService.html" data-type="entity-link" >ReviewsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidateObjectIdPipe.html" data-type="entity-link" >ValidateObjectIdPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderSummary.html" data-type="entity-link" >OrderSummary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SwaggerDocumentOptions.html" data-type="entity-link" >SwaggerDocumentOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});