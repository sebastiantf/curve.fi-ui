(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0e4abe"], {
        "90e6": function(t, e, n) {
            "use strict";

            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach((function(e) {
                        o(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function o(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function l(t, e, n, r, i, o, l) {
                try {
                    var a = t[o](l),
                        p = a.value
                } catch (d) {
                    return void n(d)
                }
                a.done ? e(p) : Promise.resolve(p).then(r, i)
            }

            function a(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            l(o, r, i, a, p, "next", t)
                        }

                        function p(t) {
                            l(o, r, i, a, p, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            n.r(e);
            var p = '\n\t<svg fill="none" xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 38 33">\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M60.5108 17.1193V7.87679H62.682V17.1193C62.682 18.6187 62.1747 19.851 61.1602 20.8163C60.1659 21.7611 58.9484 22.2335 57.5077 22.2335C56.067 22.2335 54.8292 21.7611 53.8147 20.8163C52.8204 19.851 52.3131 18.6187 52.3131 17.1193V7.87679H54.5046V17.1193C54.5046 18.0025 54.7887 18.7419 55.3771 19.2965C55.9656 19.851 56.6758 20.1386 57.5077 20.1386C58.3397 20.1386 59.0296 19.851 59.618 19.2965C60.2065 18.7419 60.5108 18.0025 60.5108 17.1193ZM67.6043 16.872V22.0273H65.5143V12.4356H67.6043V13.8733C68.1116 12.8258 69.3697 12.2302 70.506 12.2302C72.7989 12.2302 74.1178 13.7295 74.1178 16.4407V22.0273H72.0278V16.6871C72.0278 15.1878 71.2568 14.3046 70.0393 14.3046C68.6595 14.3046 67.6043 15.1262 67.6043 16.872ZM79.0079 22.0274H76.9381V12.4357H79.0079V22.0274ZM77.9731 7.21899C78.7645 7.21899 79.3529 7.79376 79.3529 8.55327C79.3529 9.31279 78.7645 9.88755 77.9731 9.88755C77.2223 9.88755 76.573 9.29226 76.573 8.55327C76.573 7.81429 77.2223 7.21899 77.9731 7.21899ZM90.412 22.0281H82.6607V7.87679H84.8116V20.0359H90.412V22.0281ZM122.079 16.872V22.0273H119.989V12.4356H122.079V13.8733C122.586 12.8258 123.844 12.2302 124.981 12.2302C127.274 12.2302 128.592 13.7295 128.592 16.4407V22.0273H126.502V16.6871C126.502 15.1878 125.731 14.3046 124.514 14.3046C123.134 14.3046 122.079 15.1262 122.079 16.872Z" fill="#12083A"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M96.43 20.1786C97.2417 20.1786 97.9316 19.9116 98.4794 19.3571C99.0273 18.8025 99.3114 18.0837 99.3114 17.2005C99.3114 15.4752 98.0533 14.3045 96.43 14.3045C95.6386 14.3045 94.9487 14.5715 94.4009 15.1055C93.853 15.6395 93.5689 16.3378 93.5689 17.2005C93.5689 18.0837 93.853 18.8025 94.4009 19.3571C94.9487 19.9116 95.6386 20.1786 96.43 20.1786ZM96.4298 12.23C97.8299 12.23 99.0068 12.6818 99.9605 13.6061C100.914 14.5303 101.401 15.7216 101.401 17.2004C101.401 18.6792 100.914 19.891 99.9402 20.8358C98.9865 21.7601 97.8096 22.2325 96.4298 22.2325C95.05 22.2325 93.8731 21.7601 92.9194 20.8358C91.9657 19.891 91.499 18.6792 91.499 17.2004C91.499 15.7216 91.9657 14.5303 92.9194 13.6061C93.8731 12.6818 95.05 12.23 96.4298 12.23Z" fill="#12083A"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M117.412 8.55327C117.412 7.79376 116.823 7.21899 116.032 7.21899C115.281 7.21899 114.632 7.81429 114.632 8.55327C114.632 9.29226 115.281 9.88755 116.032 9.88755C116.823 9.88755 117.412 9.31279 117.412 8.55327ZM114.997 22.0275H117.067V12.4358H114.997V22.0275Z" fill="#12083A"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M111.471 14.9307C111.531 14.9144 111.592 14.8962 111.652 14.8761C112.41 14.6232 112.868 14.1 113.459 13.4244C113.595 13.2693 113.738 13.1061 113.893 12.9363L112.449 11.6182C112.201 11.8898 112.011 12.1135 111.855 12.2971C111.501 12.7147 111.323 12.9251 111.034 13.0214C110.759 13.1131 110.432 13.129 109.906 12.9673C109.159 12.4521 108.286 12.1991 107.287 12.1991C106.045 12.1991 104.985 12.6018 104.127 13.4255C103.268 14.2493 102.848 15.311 102.848 16.6289C102.848 17.5631 103.059 18.3776 103.488 19.0727L102.94 19.999L102.936 20.0072C102.271 21.1831 102.279 22.5147 103.046 23.496C103.807 24.4696 105.117 24.8493 106.55 24.5763C108.04 24.2926 109.151 24.5195 109.754 24.9013C110.046 25.0858 110.197 25.2897 110.265 25.4766C110.33 25.6575 110.347 25.9067 110.221 26.2482C110.015 26.6488 109.425 27.13 108.176 27.2317C106.93 27.3333 105.218 27.0194 103.238 26.3166L102.459 27.9536C104.624 28.8929 106.667 29.3162 108.335 29.1803C110 29.0446 111.483 28.3136 112.054 26.7708C112.319 26.0566 112.346 25.4847 112.103 24.8127C111.863 24.1467 111.389 23.6224 110.8 23.2497C109.644 22.5172 107.979 22.314 106.184 22.6559C105.272 22.8297 104.784 22.5448 104.586 22.2924C104.396 22.0486 104.287 21.5955 104.634 20.9766L104.925 20.4839C105.616 20.9016 106.405 21.1137 107.287 21.1137C108.529 21.1137 109.589 20.6927 110.448 19.869C111.324 19.0269 111.763 17.9469 111.763 16.6289C111.763 16.0063 111.665 15.4409 111.471 14.9307ZM109.027 18.5371C108.565 19.0096 107.982 19.2371 107.297 19.2371C106.629 19.2371 106.047 19.0096 105.584 18.5371C105.121 18.0646 104.882 17.4521 104.882 16.6997C104.882 15.9647 105.121 15.3698 105.584 14.9148C106.047 14.4598 106.629 14.2323 107.297 14.2323C108.668 14.2323 109.73 15.2298 109.73 16.6997C109.73 17.4521 109.49 18.0646 109.027 18.5371Z" fill="#12083A"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.35059 0 13.3522 3.95072 13.3522 8.82418V15.8177C13.3522 18.1572 15.2731 20.0537 17.6427 20.0537C20.0123 20.0537 21.9332 18.1572 21.9332 15.8177V8.82418C21.9332 3.95072 25.9348 0 30.871 0H35.36V15.5447C35.36 25.185 27.4444 33 17.68 33C7.91561 33 0 25.185 0 15.5447V0Z" fill="url(#paint0_linear)"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.35059 0 13.3522 3.95072 13.3522 8.82418V15.8177C13.3522 18.1572 15.2731 20.0537 17.6427 20.0537C20.0123 20.0537 21.9332 18.1572 21.9332 15.8177V8.82418C21.9332 3.95072 25.9348 0 30.871 0H35.36V15.5447C35.36 25.185 27.4444 33 17.68 33C7.91561 33 0 25.185 0 15.5447V0Z" fill="url(#paint1_linear)"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.35059 0 13.3522 3.95072 13.3522 8.82418V15.8177C13.3522 18.1572 15.2731 20.0537 17.6427 20.0537C20.0123 20.0537 21.9332 18.1572 21.9332 15.8177V8.82418C21.9332 3.95072 25.9348 0 30.871 0H35.36V15.5447C35.36 25.185 27.4444 33 17.68 33C7.91561 33 0 25.185 0 15.5447V0Z" fill="url(#paint2_linear)"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.35059 0 13.3522 3.95072 13.3522 8.82418V15.8177C13.3522 18.1572 15.2731 20.0537 17.6427 20.0537C20.0123 20.0537 21.9332 18.1572 21.9332 15.8177V8.82418C21.9332 3.95072 25.9348 0 30.871 0H35.36V15.5447C35.36 25.185 27.4444 33 17.68 33C7.91561 33 0 25.185 0 15.5447V0Z" fill="url(#paint3_linear)"/>\n\t\t<path opacity="0.973865" fill-rule="evenodd" clip-rule="evenodd" d="M18.4081 20.0421L20.5261 21.0203L24.6422 20.6489L26.5122 20.0421L28.6999 19.2688L31.1574 17.2003L33.1717 16.1934L34.1053 13.4891L34.4379 11.2345L34.941 9.61423V6.93811L35.2474 4.47731V2.51147C34.6562 6.52673 34.3095 7.49061 33.746 8.63864C32.9008 10.3607 32.9008 10.396 31.7599 11.9479C30.6191 13.4998 29.9889 14.2432 28.2374 15.646C26.4859 17.0487 25.7999 17.4505 23.8462 18.2507C22.5438 18.7842 21.1991 19.1924 19.8123 19.4754L18.4081 20.0421Z" fill="url(#paint4_linear)"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.35059 0 13.3522 3.95072 13.3522 8.82418V15.8177C13.3522 18.1572 15.2731 20.0537 17.6427 20.0537C20.0123 20.0537 21.9332 18.1572 21.9332 15.8177V8.82418C21.9332 3.95072 25.9348 0 30.871 0H35.36V15.5447C35.36 25.185 27.4444 33 17.68 33C7.91561 33 0 25.185 0 15.5447V0Z" fill="url(#paint5_linear)"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.35059 0 13.3522 3.95072 13.3522 8.82418V15.7809C13.3522 18.1407 15.2898 20.0537 17.68 20.0537C20.4898 20.0537 23.2606 19.4044 25.7707 18.1579L25.9658 18.061C28.5968 16.7544 30.8439 14.8029 32.4921 12.3933L32.5075 12.3708C34.1604 9.95431 35.0942 7.12876 35.2028 4.2148L35.36 0V15.5447C35.36 25.185 27.4444 33 17.68 33C7.91561 33 0 25.185 0 15.5447V0Z" fill="url(#paint6_linear)"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.35059 0 13.3522 3.95072 13.3522 8.82418V15.7809C13.3522 18.1407 15.2898 20.0537 17.68 20.0537C20.4898 20.0537 23.2606 19.4044 25.7707 18.1579L25.9658 18.061C28.5968 16.7544 30.8439 14.8029 32.4921 12.3933L32.5075 12.3708C34.1604 9.95431 35.0942 7.12876 35.2028 4.2148L35.36 0V15.5447C35.36 25.185 27.4444 33 17.68 33C7.91561 33 0 25.185 0 15.5447V0Z" fill="url(#paint7_linear)"/>\n\t\t<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="33">\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.35059 0 13.3522 3.95072 13.3522 8.82418V15.7809C13.3522 18.1407 15.2898 20.0537 17.68 20.0537C20.4898 20.0537 23.2606 19.4044 25.7707 18.1579L25.9658 18.061C28.5968 16.7544 30.8439 14.8029 32.4921 12.3933L32.5075 12.3708C34.1604 9.95431 35.0942 7.12876 35.2028 4.2148L35.36 0V15.5447C35.36 25.185 27.4444 33 17.68 33C7.91561 33 0 25.185 0 15.5447V0Z" fill="url(#paint8_linear)"/>\n\t\t</mask>\n\t\t<g mask="url(#mask0)">\n\t\t<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M13.3353 13.4179L12.9774 15.9216L12.487 20.1442L11.1426 21.6316L10.8473 23.9072L11.5984 27.008L11.5926 29.2371L13.6093 31.286L15.4931 32.6023L16.7269 33.7804L19.1421 34.9953L21.2238 36.382L22.9979 37.2745L21.5602 36.2802C20.7138 35.6948 19.9293 35.0267 19.2186 34.286L18.7646 33.8128C18.3584 33.3893 17.8758 33.0443 17.3416 32.7953C16.823 32.5537 16.4196 32.1228 16.2162 31.5934L16.0131 31.0649C15.6693 30.1699 15.4931 29.2206 15.4931 28.2633L15.4931 19.4755L14.731 18.8772L14.0364 18.0917L13.8629 17.7928L13.8214 17.7083C13.7616 17.5864 13.7059 17.4626 13.6543 17.3372C13.6027 17.2117 13.5579 17.0837 13.5199 16.9537L13.5143 16.9346C13.4726 16.7919 13.4401 16.6467 13.4168 16.5L13.3969 16.374L13.3353 15.8616L13.3353 13.4179Z" fill="url(#paint9_linear)"/>\n\t\t</g>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.35059 0 13.3522 3.95072 13.3522 8.82418V15.7809C13.3522 18.1407 15.2898 20.0537 17.68 20.0537C20.4898 20.0537 23.2606 19.4044 25.7707 18.1579L25.9658 18.061C28.5968 16.7544 30.8439 14.8029 32.4921 12.3933L32.5075 12.3708C34.1604 9.95431 35.0942 7.12876 35.2028 4.2148L35.36 0V15.5447C35.36 25.185 27.4444 33 17.68 33C7.91561 33 0 25.185 0 15.5447V0Z" fill="url(#paint10_linear)"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.3506 0 13.3522 3.95072 13.3522 8.82418V10.9597V28.7272C13.3522 31.087 15.2898 33 17.68 33C7.91562 33 0 25.185 0 15.5447V0Z" fill="url(#paint11_linear)"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H4.41438C9.3506 0 13.3522 3.95072 13.3522 8.82418V10.9597V28.7272C13.3522 31.087 15.2898 33 17.68 33C7.91562 33 0 25.185 0 15.5447V0Z" fill="url(#paint12_linear)"/>\n\t\t<defs>\n\t\t<linearGradient id="paint0_linear" x1="17.68" y1="0" x2="17.68" y2="33" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#DEEDFF"/>\n\t\t<stop offset="1" stop-color="#B2D4FD"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint1_linear" x1="32.0043" y1="1.75656" x2="30.9757" y2="20.7371" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#00D6D9"/>\n\t\t<stop offset="1" stop-color="#455CDA"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint2_linear" x1="22.8708" y1="1.75656" x2="29.9573" y2="11.9966" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#00D6D9"/>\n\t\t<stop offset="1" stop-color="#04CFD9" stop-opacity="0"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint3_linear" x1="22.931" y1="16.5" x2="25.2362" y2="19.5271" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#3F66DA" stop-opacity="0"/>\n\t\t<stop offset="1" stop-color="#2E2EAE"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint4_linear" x1="24.8937" y1="13.3057" x2="27.177" y2="19.1536" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#2D41B3" stop-opacity="0"/>\n\t\t<stop offset="1" stop-color="#141E62"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint5_linear" x1="15.3553" y1="7.8919" x2="28.5471" y2="23.0918" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#3F66DA" stop-opacity="0"/>\n\t\t<stop offset="1" stop-color="#2436C1"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint6_linear" x1="43.3468" y1="40.5914" x2="31.3119" y2="9.34286" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#706AE1"/>\n\t\t<stop offset="1" stop-color="#4352ED"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint7_linear" x1="67.4184" y1="1.75656" x2="37.8858" y2="38.7384" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#00D6D9"/>\n\t\t<stop offset="1" stop-color="#0FC4DD" stop-opacity="0"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint8_linear" x1="24.7435" y1="23.2722" x2="14.1909" y2="30.3859" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#3F4DDA" stop-opacity="0"/>\n\t\t<stop offset="1" stop-color="#2736A4"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint9_linear" x1="19.1948" y1="23.354" x2="13.0623" y2="23.3828" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#2D41B3" stop-opacity="0"/>\n\t\t<stop offset="1" stop-color="#141E62"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint10_linear" x1="24.7435" y1="23.2722" x2="14.1909" y2="30.3859" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#3F4DDA" stop-opacity="0"/>\n\t\t<stop offset="1" stop-color="#2736A4"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint11_linear" x1="6.79858" y1="1.44448e-07" x2="17.0045" y2="23.042" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#00D6D9"/>\n\t\t<stop offset="1" stop-color="#5272EE"/>\n\t\t</linearGradient>\n\t\t<linearGradient id="paint12_linear" x1="4.91662" y1="8.00639" x2="12.8211" y2="20.2053" gradientUnits="userSpaceOnUse">\n\t\t<stop stop-color="#00D6D9"/>\n\t\t<stop offset="1" stop-color="#0FC4DD" stop-opacity="0"/>\n\t\t</linearGradient>\n\t\t</defs>\n\t</svg>\n';

            function d(t) {
                var e = t.networkId,
                    r = t.preferred,
                    o = t.label,
                    l = t.iconSrc,
                    d = t.svg;
                return {
                    name: o || "UniLogin",
                    svg: d || p,
                    iconSrc: l,
                    wallet: function() {
                        var t = a(regeneratorRuntime.mark((function t(r) {
                            var o, l, a, p, d, s;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return o = r.createLegacyProviderInterface, l = r.networkName, t.next = 3, n.e("chunk-2d0c1da8").then(n.t.bind(null, "488f", 7));
                                    case 3:
                                        return a = t.sent, p = a["default"], d = l(e), s = p.create(d), t.abrupt("return", {
                                            provider: s,
                                            interface: i(i({}, o(s)), {}, {
                                                connect: function() {
                                                    return s.enable()
                                                },
                                                loading: s.waitUntilReady(),
                                                disconnect: function() {
                                                    return new Promise((function(t) {
                                                        return s.send({
                                                            method: "ul_disconnect"
                                                        }, t)
                                                    }))
                                                },
                                                dashboard: function() {
                                                    return s.openDashboard()
                                                }
                                            })
                                        });
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));

                        function r(e) {
                            return t.apply(this, arguments)
                        }
                        return r
                    }(),
                    type: "sdk",
                    desktop: !0,
                    mobile: !0,
                    preferred: r
                }
            }
            e["default"] = d
        }
    }
]);
//# sourceMappingURL=chunk-2d0e4abe.8cdb4528.js.map