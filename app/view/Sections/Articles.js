Ext.define('RT.view.Sections.Articles', {
	extend: 'Ext.navigation.View',
	xtype: 'articles',

	config: {
                title: 'Articles',
                iconCls: 'user',

                /**********
                 * navigation menu
                 * comes from sectionsList
                 **********/
                items: {
        	       xtype: 'articleslist',
        	}
	}

});