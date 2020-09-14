const dataSource = [];

for (let i = 0; i < 100; i++) {
  dataSource.push({
    'id': i.toString(),
    'name': '海尔',
    'desc': `空调冰箱洗衣机${i}`,
    'logo_url': 'www.baidu.com',
    'sort': 0,
    'status': 1,
    'create_time': '1970-01-01 08:00:00',
    'update_time': '1970-01-01 08:00:00',
    'delete_time': '1970-01-01 08:00:00',
    'is_delete': 0
  });
}
module.exports = {
  'data': {
    'current_page': 1,
    'data': [...dataSource],
    'first_page_url': 'http://10.20.20.206:9090/goods/brand?=1',
    'from': 1,
    'last_page': 1,
    'last_page_url': 'http://10.20.20.206:9090/goods/brand?=1',
    'next_page_url': null,
    'path': 'http://10.20.20.206:9090/goods/brand',
    'per_page': 15,
    'prev_page_url': null,
    'to': 2,
    'total': 2
  },
  'code': 0,
  'msg': 'success'
};