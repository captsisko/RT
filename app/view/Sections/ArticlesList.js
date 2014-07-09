Ext.define('RT.view.Sections.ArticlesList', {
	// extend: 'Ext.tab.Panel',
    extend: 'Ext.List',
	xtype: 'articleslist',

    requires: [
        'Ext.plugin.ListPaging',
    ],

    config: {
        
        // grouped: true,
        // iconCls: true,
        striped: true,
        // scrollable: true,
        // fullscreen: true,
        // navigationBar: false,
        onItemDisclosure: true,
        styleHtmlContent: true,

        /*refs: {
            main: 'main', 
        },*/

        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Sections',

            // navigationBar: false,

            items: [
                {
                    name: 'BTNslidenav',
                    iconMask: true,
                    iconCls: 'list',
                    ui: 'plain',
                },
                {
                    iconMask: true,
                    iconCls: 'user',
                    ui: 'plain',
                    align: 'right'
                }
            ]
        },

        store: 'Articles',
        itemTpl: '{title}',

        /*plugins: [
            {
                type: 'listpaging',
                autoPaging: true,
            }
        ],*/

        /*listeners: {
            itemtap: function(data, index){
                var message = data.getStore().getAt(index);
                console.log('message tap' + '['+index+']: ' + message.getData().title);
                // this.fireEvent('disclose', '', message);

                // Ext.Viewport.setActiveItem('messagedetails');

            },
        },*/

	} // config
});