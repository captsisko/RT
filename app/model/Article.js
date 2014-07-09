Ext.define('RT.model.Article', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			'nid',
			'title',
			'section1',
			'image1',
			'section2',
			'image2',
			'section3',
			'image3',

		]
	},

	/*teacher: function(){
		return this.data.Author;
	}*/
});