import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { useUserStorageService } from "../../services/storageAdapter";

export const Login = () => {
  const { updateUser } = useUserStorageService();
  const [username, setUsername] = useState("绝弹");
  const [email, setEmail] = useState("810335188@qq.com");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    updateUser({ name: username, email });
    setLoading(false);
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit} className="space-x-4">
      <label>
        <span>用户名称：</span>
        <input
          name="username"
          value={username}
          className="input border border-slate-300 hover:outline-none active:outline-none rounded-sm px-3"
          placeholder="请输入"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <label>
        <span>邮箱地址：</span>
        <input
          name="email"
          value={email}
          className="input border border-slate-300 hover:outline-none active:outline-none rounded-sm px-3"
          placeholder="请输入"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <button
        onClick={onSubmit}
        type="submit"
        disabled={loading}
        className="h-8 text-blue-500 border border-blue-500 px-3 rounded-sm"
      >
        {loading ? "正在登录..." : "立即登录"}
      </button>
    </form>
  );
};
