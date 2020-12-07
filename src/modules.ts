

/** Rules to avoid mutual dependency problems
 *  - Always import internal modules from this file
 *  - All exported modules should be imported here and export from here
 * 
 * This allows us to control the order in which modules are loaded 
 * and avoids some huge problems in large projects if not done in the beggining
 */

export { default as App } from './app';
export * as components from './components';
