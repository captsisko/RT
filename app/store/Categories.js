Ext.define('RT.store.Categories', {
	extend: 'Ext.data.Store',

	config: {
		model: 'RT.model.Category',
		storeID: 'Categories',
		autoLoad: true,

		proxy: {
			type: 'ajax',
			url: 'http://178.79.128.76/revivaltimes/app/sections/',
			reader: {
				type: 'json',
				rootProperty: 'JSON',
			}
		}
	}
});