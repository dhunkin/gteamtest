var items = {
	'items': [{
		'type': 'build',
		'itemId': 'Tenrox-R1_1235',
		'owner': '',
		'timeStarted': '',
		'state': 'Pending',
		'metrics': {
			'test': {
				'value': 64,
				'positive': true
			},
			'maintainability': {
				'value': 53,
				'positive': true
			},
			'security': {
				'value': 64,
				'positive': true
			},
			'workmanship': {
				'value': 72,
				'positive': true
			}
		},
		'build': {
			'debug': true,
			'release': true,
			'when': '10:46am - 4\/17\/2014'
		},
		'utest': {
			'passed': 142,
			'failed': 10,
			'coverage': 76,
			'positive': 73
		},
		'ftest': {
			'passed': 4321,
			'failed': 2145,
			'coverage': 23,
			'positive': 68
		}
	}, {
		'type': 'firewall',
		'itemId': '432462',
		'owner': 'jtuck',
		'timeStarted': '4\/18\/2014 12:12pm',
		'state': 'Running'
	}, {
		'type': 'firewall',
		'itemId': '432461',
		'owner': 'samy',
		'timeStarted': '4\/18\/2014 10:53am',
		'state': 'Rejected',
		'metrics': {
			'test': {
				'value': 64,
				'positive': true
			},
			'maintainability': {
				'value': 53,
				'positive': false
			},
			'security': {
				'value': 64,
				'positive': true
			},
			'workmanship': {
				'value': 72,
				'positive': true
			}
		},
		'build': {
			'debug': true,
			'release': true,
			'when': '10:46am - 4\/17\/2014'
		},
		'utest': {
			'passed': 142,
			'failed': 10,
			'coverage': 76,
			'positive': 73
		},
		'ftest': {
			'passed': 4321,
			'failed': 2145,
			'coverage': 23,
			'positive': 68
		},
		'result': {
			'status': 'Change Rejected',
			'reason': 'Metrics Reduction'
		}
	}, {
		'type': 'build',
		'itemId': 'Tenrox-R1_1234',
		'owner': '',
		'timeStarted': '4\/17\/2014 9:42am',
		'state': 'Complete',
		'metrics': {
			'test': {
				'value': 64,
				'positive': true
			},
			'maintainability': {
				'value': 53,
				'positive': true
			},
			'security': {
				'value': 64,
				'positive': true
			},
			'workmanship': {
				'value': 72,
				'positive': true
			}
		},
		'build': {
			'debug': true,
			'release': true,
			'when': '10:46am - 4\/17\/2014'
		},
		'utest': {
			'passed': 142,
			'failed': 10,
			'coverage': 76,
			'positive': 73
		},
		'ftest': {
			'passed': 4399,
			'failed': 2133,
			'coverage': 23,
			'positive': 68
		},
		'result': {
			'status': 'Complete'
		}
	}, {
		'type': 'firewall',
		'itemId': '432460',
		'owner': 'samy',
		'timeStarted': '4\/17\/2014 7:51am',
		'state': 'Rejected',
		'metrics': {
			'test': {
				'value': 64,
				'positive': true
			},
			'maintainability': {
				'value': 53,
				'positive': true
			},
			'security': {
				'value': 64,
				'positive': false
			},
			'workmanship': {
				'value': 72,
				'positive': true
			}
		}
	}, {
		'type': 'firewall',
		'itemId': '432459',
		'owner': 'samy',
		'timeStarted': '4\/16\/2014 6:43am',
		'state': 'Accepted',
		'metrics': {
			'test': {
				'value': 64,
				'positive': true
			},
			'maintainability': {
				'value': 53,
				'positive': true
			},
			'security': {
				'value': 64,
				'positive': true
			},
			'workmanship': {
				'value': 72,
				'positive': true
			}
		},
		'build': {
			'debug': true,
			'release': true,
			'when': '10:46am - 4\/17\/2014'
		},
		'utest': {
			'passed': 142,
			'failed': 10,
			'coverage': 76,
			'positive': 73
		},
		'ftest': {
			'passed': 4321,
			'failed': 2145,
			'coverage': 23,
			'positive': 68
		},
		'result': {
			'status': 'Change Accepted',
			'reason': 'Auto-Merged'
		}
	}]
};