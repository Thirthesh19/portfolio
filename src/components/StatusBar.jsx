import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Cpu, Activity } from 'lucide-react';

const StatusBar = () => {
  const [time, setTime] = useState(new Date());
  const [cpuTemp, setCpuTemp] = useState(42);
  const [memUsage, setMemUsage] = useState(2048);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      // Simulate slight fluctuations in system stats
      if (Math.random() > 0.7) {
        setCpuTemp(prev => Math.max(35, Math.min(85, prev + (Math.random() * 4 - 2))));
        setMemUsage(prev => Math.max(1024, Math.min(8192, prev + (Math.random() * 200 - 100))));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-8 bg-[#0f111a]/90 backdrop-blur-md border-b border-[#7dcfff]/30 z-[900] flex items-center justify-between px-4 font-mono text-[10px] md:text-xs text-[#7dcfff] uppercase tracking-widest select-none">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 animate-pulse">
          <Activity size={12} className="text-[#f7768e]" />
          <span>SYS.ONLINE</span>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <Cpu size={12} className="text-[#e0af68]" />
          <span>TEMP: {cpuTemp.toFixed(1)}°C</span>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <span className="text-[#9aa5ce]">MEM:</span>
          <span>{Math.round(memUsage)} MB / 8192 MB</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 text-[#9aa5ce]">
          <Wifi size={12} />
          <span>UPLINK_STABLE</span>
        </div>
        <div className="flex items-center space-x-1">
          <Battery size={12} className="text-[#9ece6a]" />
          <span>100%</span>
        </div>
        <div className="text-[#c0caf5] font-bold">
          {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
