const whitelist = {     //声明了一个白名单
    '/pages/index/index': 'index',
    '/pages/game/game': 'game_index',
    '/pages/user/user': 'user_index',
	'/pages/luckdraw/luckdraw': 'luckdraw_index',
}
export default [	
	{
	    aliasPath: '/',
	    path: '/pages/index/index',
	    name: 'index',
	},
	{
	    aliasPath: '/login',
	    path: '/pages/login/login',
	    name: "login",
	},{
	    aliasPath: '/register',
	    path: '/pages/login/register',
	    name: "register",
	},{
	    aliasPath: '/pwd',
	    path: '/pages/pwd/pwd',
	    name: "pwd",
	},
	{
	    aliasPath: '/user_index',
	    path: '/pages/user/user',
	    name: "user_index",
	},
	{
	    aliasPath: '/game_index',
	    path: '/pages/game/game',
	    name: "game_index",
	},
	{
	    aliasPath: '/luckdraw_index',
	    path: '/pages/luckdraw/luckdraw',
	    name: "luckdraw_index",
	},
	{
	    aliasPath: '/user_level',
	    path: '/pages/user/level',
	    name: "user_level",
	},
	{
	    aliasPath: '/user_balance',
	    path: '/pages/user/balance',
	    name: "user_balance",
	},{
	    aliasPath: '/user_balance_bao',
	    path: '/pages/user/balance_bao',
	    name: "user_balance_bao",
	},{
	    aliasPath: '/user_invite',
	    path: '/pages/user/invite',
	    name: "user_invite",
	},{
	    aliasPath: '/user_setting',
	    path: '/pages/user/setting',
	    name: "user_setting",
	},{
	    aliasPath: '/user_balance_tx',
	    path: '/pages/user/balance_tx',
	    name: "user_balance_tx",
	},{
	    aliasPath: '/user_balance_tx_log',
	    path: '/pages/user/balance_tx_log',
	    name: "user_balance_tx_log",
	},{
	    aliasPath: '/user_balance_cz',
	    path: '/pages/user/balance_cz',
	    name: "user_balance_cz",
	},{
	    aliasPath: '/user_balance_cz_log',
	    path: '/pages/user/balance_cz_log',
	    name: "user_balance_cz_log",
	},{
	    aliasPath: '/user_fund_list',
	    path: '/pages/user/fund_list',
	    name: "user_fund_list",
	},{
	    aliasPath: '/user_balance_bao_log',
	    path: '/pages/user/balance_bao_log',
	    name: "user_balance_bao_log",
	},{
	    aliasPath: '/user_bank_list',
	    path: '/pages/user/bank_list',
	    name: "user_bank_list",
	},{
	    aliasPath: '/user_bank_add',
	    path: '/pages/user/bank_add',
	    name: "user_bank_add"
	},
    {
        aliasPath: '/404',
        path: "/pages/404",
        name: "404",
    }, {
        path: "*",
        name: "moddle",
        redirect: to => {
            const name = whitelist[to.path]
            if (name) {
                return {name: name};
            }
            return {
                name: "index"
            }
        }
    }
]
