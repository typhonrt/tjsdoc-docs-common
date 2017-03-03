import CoreDocResolver from './resolver/CoreDocResolver.js';

/**
 * Adds all common doc plugins.
 *
 * @param {PluginEvent} ev - The plugin event.
 *
 * @ignore
 */
export function onPluginLoad(ev)
{
   const eventbus = ev.eventbus;

   // Instances are being loaded into the plugin manager so auto log filtering needs an explicit filter.
   eventbus.trigger('log:add:filter', {
      type: 'inclusive',
      name: 'tjsdoc-docs-common-filter',
      filterString: '(tjsdoc-docs-common\/dist|tjsdoc-docs-common\/src)'
   });

   eventbus.trigger('plugins:add', { name: 'tjsdoc-core-doc-resolver', instance: new CoreDocResolver() });
}