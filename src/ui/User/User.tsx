import { useUserStorageService } from "../../services/storageAdapter";

export const User = () => {
  const { user } = useUserStorageService()

  return <div>
    <div className="relative h-48 ">
      <img src="https://picsum.photos/1280/200?key=9" alt={user?.name} height="100%" width="200px"  className="absolute w-full h-full left-0 top-0 brightness-50 rounded backdrop-blur-sm bg-slate-100" />
      <div className="absolute flex gap-2 left-12 bottom-6 items-center">
        <img src="https://picsum.photos/64" alt={user?.name} width="64px" height="64px" className="rounded-full ring ring-slate-200 overflow-hidden bg-slate-100 rounded-full" />
        <div className="ml-2">
          <h2 className="font-bold text-base text-slate-700 text-white">{user?.name}</h2>
          <p className="text-sm text-slate-300 mt-1">{user?.email}</p>
        </div>
      </div>
    </div>
  </div>
};
