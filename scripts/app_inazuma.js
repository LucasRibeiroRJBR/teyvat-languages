const button_q = document.querySelector('.b_q')
const button_w = document.querySelector('.b_w')
const button_e = document.querySelector('.b_e')
const button_r = document.querySelector('.b_r')
const button_t = document.querySelector('.b_t')
const button_y = document.querySelector('.b_y')
const button_u = document.querySelector('.b_u')
const button_i = document.querySelector('.b_i')
const button_o = document.querySelector('.b_o')
const button_p = document.querySelector('.b_p')
const button_a = document.querySelector('.b_a')
const button_s = document.querySelector('.b_s')
const button_d = document.querySelector('.b_d')
const button_f = document.querySelector('.b_f')
const button_g = document.querySelector('.b_g')
const button_h = document.querySelector('.b_h')
const button_j = document.querySelector('.b_j')
const button_k = document.querySelector('.b_k')
const button_l = document.querySelector('.b_l')
const button_z = document.querySelector('.b_z')
const button_x = document.querySelector('.b_x')
const button_c = document.querySelector('.b_c')
const button_v = document.querySelector('.b_v')
const button_b = document.querySelector('.b_b')
const button_n = document.querySelector('.b_n')
const button_m = document.querySelector('.b_m')
const button_dot = document.querySelector('.b_dot')
const button_comma = document.querySelector('.b_comma')

const textarea = document.querySelector('textarea')

const delete_btn = document.querySelector('.delete')
const space_btn = document.querySelector('.space')
const clean_btn = document.querySelector('.clean')

let chars = []

button_q.addEventListener('click', () => {textarea.value += 'q';chars = textarea.value.split('');})
button_w.addEventListener('click', () => {textarea.value += 'w';chars = textarea.value.split('');})
button_e.addEventListener('click', () => {textarea.value += 'e';chars = textarea.value.split('');})
button_r.addEventListener('click', () => {textarea.value += 'r';chars = textarea.value.split('');})
button_t.addEventListener('click', () => {textarea.value += 't';chars = textarea.value.split('');})
button_y.addEventListener('click', () => {textarea.value += 'y';chars = textarea.value.split('');})
button_u.addEventListener('click', () => {textarea.value += 'u';chars = textarea.value.split('');})
button_i.addEventListener('click', () => {textarea.value += 'i';chars = textarea.value.split('');})
button_o.addEventListener('click', () => {textarea.value += 'o';chars = textarea.value.split('');})
button_p.addEventListener('click', () => {textarea.value += 'p';chars = textarea.value.split('');})
button_a.addEventListener('click', () => {textarea.value += 'a';chars = textarea.value.split('');})
button_s.addEventListener('click', () => {textarea.value += 's';chars = textarea.value.split('');})
button_d.addEventListener('click', () => {textarea.value += 'd';chars = textarea.value.split('');})
button_f.addEventListener('click', () => {textarea.value += 'f';chars = textarea.value.split('');})
button_g.addEventListener('click', () => {textarea.value += 'g';chars = textarea.value.split('');})
button_h.addEventListener('click', () => {textarea.value += 'h';chars = textarea.value.split('');})
button_j.addEventListener('click', () => {textarea.value += 'j';chars = textarea.value.split('');})
button_k.addEventListener('click', () => {textarea.value += 'k';chars = textarea.value.split('');})
button_l.addEventListener('click', () => {textarea.value += 'l';chars = textarea.value.split('');})
button_z.addEventListener('click', () => {textarea.value += 'z';chars = textarea.value.split('');})
button_x.addEventListener('click', () => {textarea.value += 'x';chars = textarea.value.split('');})
button_c.addEventListener('click', () => {textarea.value += 'c';chars = textarea.value.split('');})
button_v.addEventListener('click', () => {textarea.value += 'v';chars = textarea.value.split('');})
button_b.addEventListener('click', () => {textarea.value += 'b';chars = textarea.value.split('');})
button_n.addEventListener('click', () => {textarea.value += 'n';chars = textarea.value.split('');})
button_m.addEventListener('click', () => {textarea.value += 'm';chars = textarea.value.split('');})


delete_btn.addEventListener('click', () => {
    chars.pop();
    textarea.value = chars.join('');
})

space_btn.addEventListener('click', () => {
    chars.push(' ');
    textarea.value = chars.join('');
})

clean_btn.addEventListener('click', () => {
    while(chars.length > 0) {
        chars.pop();
        textarea.value = chars.join('');
    }
})

