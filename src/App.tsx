/**
 * App - 메인 앱 컴포넌트
 * 
 * 외부 설정(event-config.json)을 로드하여
 * EventPage에 실험 설정을 주입합니다.
 */

import { useExperimentConfig } from './hooks/useExperimentConfig';
import EventPage from './pages/EventPage';
import './App.css';

function App() {
  const { config, isLoading, error } = useExperimentConfig('/event-config.json');

  // 로딩 중
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p className="loading-text">이벤트 준비 중...</p>
      </div>
    );
  }

  // 에러 발생 시에도 기본값으로 렌더링
  if (error) {
    console.warn('Config load error, using defaults:', error);
  }

  return <EventPage config={config} />;
}

export default App;

