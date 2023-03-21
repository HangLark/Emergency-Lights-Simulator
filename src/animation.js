export class ContainerAnimation {
    constructor(node) {
        this.node = node;
    }

    start(duration, direction, before, after) {
        this.duration = duration;
        this.startTime = performance.now();
        this.framId = requestAnimationFrame(() => {
            this.onFrame(direction, before, after)
        });
    }

    onFrame(direction, before, after) {
        const timePassed = performance.now() - this.startTime;
        if (direction === "up") {//From top:-5% to top:-20%
            const progress = Math.max(timePassed / this.duration * (after-before) + before, after);
            this.onProgress(progress);
            if (progress >= after) {
                this.frameId = requestAnimationFrame(() => this.onFrame(direction,before, after));
            }
        } else if (direction === "down") {//From top:-20% to top:-5%
            const progress = Math.min(timePassed / this.duration * (after-before) + before, after);
            this.onProgress(progress);
            if (progress <= after) {
                this.frameId = requestAnimationFrame(() => this.onFrame(direction,before, after));
            }
        }
    }

    onProgress(progress) {
        progress = progress.toFixed(2).toString() + "%"
        this.node.style.top = progress;
    }
}

export class HandlerAnimation {
    constructor(node) {
        this.node = node;
    }

    startSpin(duration, direction) {
        this.duration = duration;
        this.startTime = performance.now();
        this.framId = requestAnimationFrame(() => {
            this.onFrame(direction)
        });
    }

    onFrame(direction) {
        const timePassed = performance.now() - this.startTime;
        if (direction === "up") {
            const progress = Math.min(timePassed / this.duration * 180, 180);
            this.onProgress(progress);
            if (progress <= 180) {
                this.frameId = requestAnimationFrame(() => this.onFrame(direction));
            }
        } else if (direction === "down") {
            const progress = Math.max(180 - timePassed / this.duration * 180, 0);
            this.onProgress(progress);
            if (progress >= 0) {
                this.frameId = requestAnimationFrame(() => this.onFrame(direction));
            }
        }
    }

    onProgress(progress) {
        progress = "rotate(" + progress.toFixed(2).toString() + "deg)";
        this.node.style.transform = progress;
    }
}