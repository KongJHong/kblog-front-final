import { user_login, user_getInfo, user_logout } from '@/api/login-api';
import { LoginDTO, UserDTO } from '@/models/index';
import store from '@/store';
import { getToken, removeToken, setToken } from '@/utils/cookies';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({ dynamic: true, store, name: "user"})
class User extends VuexModule implements UserDTO {
    // 在需要引用的地方单独引用该store文件即可注入。
    // 好处：灵活使用，仅仅在需要引入的地方才注入到store中去
    // 缺点：需要单独引入文件

    /* 这里代表的就是state里面的状态 */
    public token = getToken() || "";
    public id = "";
    public username = "";
    public avatar = "";
    public introduction = "";
    public roles: string[] = [];

    // @Mutation 标注为 mutation
    @Mutation
    private SET_TOKEN(token: string){
      this.token = token;
    }

    @Mutation
    private SET_USERNAME(username: string) {
      this.username = username;
    }

    @Mutation
    private SET_AVATAR(avatar: string) {
      this.avatar = avatar;
    }

    @Mutation
    private SET_INTRODUCTION(introduction: string) {
      // 设置介绍
      this.introduction = introduction;
    }
  
    @Mutation
    private SET_ROLES(roles: string[]) {
      // 设置角色
      this.roles = roles;
    }

    // @Action 标注为action
  @Action
  public Login(userInfo: LoginDTO) {
    // 登录接口，拿到token
    let { username, password } = userInfo;
    username = username.trim();
    user_login({ username, password }).then(resp => {
      const user = resp.data;
      this.SET_USERNAME(user.username);
      this.SET_ROLES(user.roles);
      this.SET_AVATAR(user.avatar);
      this.SET_INTRODUCTION(user.introduction);
    });
  }

  @Action
  public GetUserToken() {
    this.SET_TOKEN(getToken()!);
    return getToken() || '';
  }

  @Action
  public ResetToken() {
    // 重置token（清空操作），需重新登录
    removeToken();
    this.SET_TOKEN("");
    this.SET_ROLES([]);
  }

  @Action
  public async GetUserInfo() {
    // 获取用户信息
    if (this.token === "") {
      throw Error("GetUserInfo: token is undefined!");
    }
    const userDto = await user_getInfo(this.id);
    console.log("用户信息", userDto);
    if (!userDto) {
      throw Error("Verification failed, please Login again.");
    }
    // const { roles, name, avatar, introduction } = data.user;
    // console.log("avatar", avatar);
    // // roles must be a non-empty array
    // if (!roles || roles.length <= 0) {
    //   throw Error("GetUserInfo: roles must be a non-null array!");
    // }
    this.SET_ROLES(userDto.roles);
    this.SET_USERNAME(userDto.username);
    this.SET_AVATAR(userDto.avatar);
    this.SET_INTRODUCTION(userDto.introduction);
  }

  @Action
  public async LogOut() {
    // 注销
    if (this.token === "") {
      throw Error("LogOut: token is undefined!");
    }
    await user_logout(this.id);
    removeToken();
    this.SET_TOKEN("");
    this.SET_ROLES([]);
  }
}


// getModule 得到一个类型安全的store，module必须提供name属性
export const UserModule = getModule(User);