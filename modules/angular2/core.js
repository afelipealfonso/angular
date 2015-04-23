/**
 * @module
 * @public
 * @description
 * Define angular core API here.
 */
export * from './src/core/annotations/visibility';
export * from './src/core/compiler/interfaces';
export * from './src/core/annotations/view';
export * from './src/core/application';
export * from './src/core/application_tokens';
export * from './src/core/annotations/di';
export * from './src/core/compiler/query_list';

export * from './src/core/compiler/compiler';

// TODO(tbosch): remove this once render migration is complete
export * from './src/render/dom/compiler/template_loader';
export * from './src/render/dom/shadow_dom/shadow_dom_strategy';
export * from './src/render/dom/shadow_dom/native_shadow_dom_strategy';
export * from './src/render/dom/shadow_dom/emulated_scoped_shadow_dom_strategy';
export * from './src/render/dom/shadow_dom/emulated_unscoped_shadow_dom_strategy';
export * from './src/core/compiler/dynamic_component_loader';
export {ElementRef, ComponentRef} from './src/core/compiler/element_injector';
export * from './src/core/compiler/view';
export * from './src/core/compiler/view_container';

export * from './src/core/compiler/ng_element';

