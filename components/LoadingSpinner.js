import { HourglassOutlined } from '@ant-design/icons';

export default function LoadingSpinner() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100vh' }}>
            <HourglassOutlined spin style={{ fontSize: 30, color: '#1890ff', marginBottom:10 }} />
            <span style={{ color: '#1890ff' }}>Seite wird geladen...</span>
        </div>
    )
}