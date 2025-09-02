import NetworkInfo from './components/NetworkInfo'

export const metadata = {
  title: 'ip info',
}

export default async function Page() {

  return <div className="grid gap-4 p-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2" >
    <NetworkInfo name="Direct" url={'https://direct.ipapi.xiazhiri.com/json'} />
    <NetworkInfo name="Proxy" url={'https://proxy.ipapi.xiazhiri.com/json'} />
    <NetworkInfo name="CN" url={'https://cn.ipapi.xiazhiri.com/json'} />
    <NetworkInfo name="Home" url={'https://home.ipapi.xiazhiri.com/json'} />
    <NetworkInfo name="Work" url={'https://work.ipapi.xiazhiri.com/json'} />
  </div>
}