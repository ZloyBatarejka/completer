import { ITestStore } from './../interfaces/ITestStore';
import { makeObservable, observable, action } from "mobx"

class Timer implements ITestStore{

    /** hih */
    public secondsPassed: number = 0
    /** singleton instance */
    private static onlyInstance: Timer;

    constructor(singletone: boolean = false) {
        if (singletone) {
            if (!Timer.onlyInstance) {
                Timer.onlyInstance = this;
            } else {
                return Timer.onlyInstance;
            }
        }
        makeObservable(this, {
            secondsPassed: observable,
            increaseTimer: action.bound
        })
    }

    increaseTimer(): void {
        this.secondsPassed += 1
    }
}

export default Timer;