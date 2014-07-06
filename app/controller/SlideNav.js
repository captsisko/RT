Ext.define('RT.controller.SlideNav', {
	extend: 'Ext.app.Controller',

	config: {

		refs: {
			main: 'main',
			navlist: 'navlist'
		},

		control: {
			"button[name='BTNslidenav']": {
				tap: 'navToggle'
			},

			navlist: {
				itemtap: function(list, index, target, record){
					this.navToggle();
					/*console.log('LIST: ' + list);
					console.log('INDEX: ' + index);
					console.log('TARGET: ' + target);
					console.log('RECORD: ' + record);*/

					switch(index){
						case 0:
							this.getMain().setActiveItem(0);
						break;
						case 1:
							// this.getMain().setActiveItem({xtype:'content_messages'});
							this.getMain().setActiveItem(1);
						break;
						case 2:
							this.getMain().setActiveItem(2);
						break;
						default:
						break;
					}
				}
			}
		},

	},

	navToggle: function(){
		console.log('Slide-Nav tap detected');

		var me = this;
		mainEl = me.getMain().element;

		if( mainEl.hasCls('out') ){
			mainEl.removeCls('out').addCls('in');
			me.getMain().setMasked(false);
		}else{
			mainEl.removeCls('in').addCls('out');
			me.getMain().setMasked(true);
		}
	}

});