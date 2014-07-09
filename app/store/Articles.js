Ext.define('RT.store.Articles', {
	extend: 'Ext.data.Store',

	config: {
		model: 'RT.model.Article',
		storeId: 'Articles',
		autoLoad: true,

		sorters: [
			/*{
				property: 'Date',
				direction: 'DESC',
			},
			{
				property: 'Time',
				direction: 'ASC',
			}*/
		],
		/*grouper: {
			groupFn: function(record){
				return record.get('Date');
			}
		},*/

		proxy: {
			type: 'ajax',
			// url: 'http://178.79.128.76/revivaltimes/app/sections/contentlist/10',
			// url: 'http://178.79.128.76/revivaltimes/app/sections/contentlist/{params.tid}',
			url: 'http://178.79.128.76/revivaltimes/app/sections/contentlist/',
			reader: {
				type: 'json',
				rootProperty: 'JSON',
			}
		}
	} // config
});