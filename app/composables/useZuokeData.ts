export const useZuokeData = () => {
  const hardware = [
    { title: '智能电力监测仪', desc: '本地实时采集，异常快速告警', icon: '/img/hardware-monitor.svg' },
    { title: '电力智能网关', desc: '多协议转换，支持边云协同', icon: '/img/hardware-gateway.svg' },
    { title: '电力数据采集器', desc: '毫秒级数据上云，兼容 MODBUS/IEC', icon: '/img/hardware-daq.svg' }
  ]

  const software = [
    { title: '电力设备物联平台', points: ['快速接入传统设备', '统一数据模型', '本地与云端一体化'] },
    { title: '云应用套件', points: ['能效诊断', '配电运维', '安全巡检'] }
  ]

  const solutions = [
    { name: '工业园区配电网', benefit: '设备智能化周期缩短 60%', kpi: '99.95% 平台可用性' },
    { name: '能源管理中心', benefit: '多场景统一调度', kpi: '30% 用能效率提升' },
    { name: '智慧城市电网', benefit: '云边协同运维', kpi: '7x24 远程运维' }
  ]

  const stats = [
    { label: '设备型号接入', value: '200+' },
    { label: '平台可用性', value: '99.95%' },
    { label: '运营效率提升', value: '30%' },
    { label: '客户覆盖省份', value: '18' }
  ]

  return { hardware, software, solutions, stats }
}
