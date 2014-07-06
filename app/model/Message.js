Ext.define('RT.model.Message', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			'nid',
			'Time',
			'Date',
			'guid',
			'title',
			'Author',
			'description',
		]
	},

	teacher: function(){
		return this.data.Author;
	}
});