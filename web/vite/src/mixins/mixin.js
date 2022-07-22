export default function () {
    let num = ref(1);
    let fav = ref(false);

    let favBtn = () => {
        num.value += 1;
        fav.value = true;
        setTimeout(() => {
            fav.value = false;
        }, 2000);
    };

    return {
        num,
        fav,
        favBtn,
    };
}

export const fav = {
    data() {
        return {
            num: 20,
        };
    },
    methods: {
        favBtn(params) {
            this.num += params;
        },
    },
};
