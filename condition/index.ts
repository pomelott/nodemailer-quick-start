import coreEvent from "../_platform/lib/coreEvent";

export default () => {
  coreEvent.register("checkCondition", "task-one", function (date) {
    console.log(`${date}: checkCondition task-one`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          taskOne: `${date}: task-one`
        })
      }, 1000)
    })
  })

  coreEvent.register("checkCondition", "task-two", function (date) {
    console.log(`${date}: checkCondition task-two`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          "taskTwo": `${date}: task-two`
        })
      }, 3000)
    })
  })
}