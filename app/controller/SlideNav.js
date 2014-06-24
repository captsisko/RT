Ext.define('RT.controller.SlideNav', {
	extend: 'Ext.app.Controller',

	config: {

		refs: {
			main: 'main'
		},

		control: {
			"button[name='BTNslidenav']": {
				tap: 'navToggle'
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