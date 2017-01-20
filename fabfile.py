#!/usr/bin/env python
# -*- coding: utf8 -*-

from fabric.api import *

env.user = 'wangxiaodong'
env.hosts = ['wx.legendpoker.cn']
env.passwords = {
    '%s@%s:22' % (env.user, env.hosts[0]): 'WangXiaoDong'
}

remoteRoot = '/home/wangxiaodong/PlayGround/Workspace/www.legendpoker.cn/'


def publish():
    print "remote publish"

    with cd(remoteRoot):
        run('git pull origin master')