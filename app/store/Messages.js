Ext.define('RT.store.Messages', {
	extend: 'Ext.data.Store',

	config: {
		model: 'RT.model.Message',
		storeId: 'Messages',
		autoLoad: true,

		sorters: [
			{
				property: 'Date',
				direction: 'DESC',
			}/*,
			{
				property: 'Time',
				direction: 'ASC',
			}*/
		],
		grouper: {
			groupFn: function(record){
				return record.get('Date');
			}
		},

		proxy: {
			type: 'ajax',
			url: 'http://178.79.128.76/revivaltimes/app/messages/',
			reader: {
				type: 'json',
				rootProperty: 'JSON',
			}
		}
	} // config
});