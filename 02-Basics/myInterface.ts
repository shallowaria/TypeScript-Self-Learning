interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string; 等效⬇️
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

//reopening interface
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const aria: Admin = {
  role: "learner",
  githubToken: "github",
  dbId: 22,
  email: "h@h.com",
  userId: 1145,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "aria114", off: 1) => {
    return 10;
  },
};
aria.email = "h@hc.com";
// aria.dbId = 33
