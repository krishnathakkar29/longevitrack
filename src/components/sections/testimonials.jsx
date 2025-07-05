"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet. Est maiores veritatis eos esse pariatur eum quis quod. Cum exercitationem qui quibusdam ut numquam deserunt qui eligendi doloreaque et aperiam tenetur. Et abcaecat quam vel blanditiis aliquam aut recendis repudiandae ut inventore veniam.",
    author: "MARY THOMPSON",
    role: "Founder of FlowTech",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAMFBMVEXY2Nitra3Gxsbb29uqqqqxsbHT09PQ0NC0tLS9vb26urrKysrCwsK3t7fNzc2np6d/lbmlAAADmklEQVR4nO2byZLjIAxAwWKxjZf//9sGd8eT9CQYhASeKV7lkOMrFiEjIUSn0+m0AACEMdYaa47/t8EOs9ZayvDT4+zMHeTAuFnuSj6jdj1toq0cmEmrV60fOamXhm6wrfs7rR85tZg2biCmj1Y/bnppsuCGt9P4e1K32mog1muvw22pqwZbktb3lJqaYkOymEfbesO2pM3kOWy19ihkinlcFTUYssXqjBq4fDEP/zYAgxKTmn3QjEaJSTUzq8GMGzKvxrsLwO1IsbALOM2wc3mYcc4nTNi5PHB8Zsh9+WBkE4O5SEyqgWs+bZkYY1BDR4wTrpVW6iXlyuKFOcn/giWmQUEse6AmjpVmCcx49kB+vviOjcGsfGcGOEIahZc/POnFLMmQSfpvPJKY4VGW3KzwzDzNyI8Bimh2mNHfJlCZkeePhkbMJ2nUZsUZ0AmxGdzXLP1a6gLVzbrZZ267A+jM6HNHKrP1tqcT+ZcAjERm5Cc6XJVyUs3IPwSoMkeGL87Ce6AHHPdBJFuA4wvlvl91ebWmj3BcbJBkteQZbQDWcjGmW0dcWecVDi9BsDtZdmag/DaI4yYoUFKnOGBZ/wFEyfUF+juNP5SJca0yUXysMw6ZEAVZGnPnhsVXETWnV9F8ss5lADmfO1s17ARQYjwlil9mqC9PvtJmoRrz6j/VXLZYrXaq3FGrNGLfajo9eHAeSu9IbNnzVG7aCx8sKW5KV2909AfVmNCBOTVpXAV34abWin2Er2oiNqV+Ilt2IcO2vtumSump1XidbsIMq9yfun6V2uXkGjVG/wLAuGVex8A6LU7coQn/5HyvcCurTue/J7wastvgBizOWUv/pAfENo1af4dRHDK8N9JjiHV0Wj7Gq8hDmDyUGgeaYwvMnJG+prnJmeDosiv+tiDCvpZ9sIOYk/JWBEpOJQuOpgDwya2gQaisEzrBbUYNW9Z3GxbMox7YKoh5sj+s8u8HsOQ+ZyBrzrgk86UFSedsKllrraZY1j1R+pUFBSq5sFJaKMlXS7woxb60KlFLPESJOkZySGsVoiiv5pJUKYYGYkn7k6yTJY+UklSDVXaoXZq1WGWH2dVKg7pB9onLRz0sWX8S8ZjWaP0H1HAxma3EpIq3PxZ3PZSoRc3oembz2aMLrVXMCMTjRu3854XoWwuarjwksQSy4daU8Xo21fMcHLF8A9dV0M26WTfrZt2sm3WzbtbNulk3+8fMvgAq0zkY2Kvf4QAAAABJRU5ErkJggg==",
  },
  {
    id: 2,
    text: "Amazing platform that helped us scale our business efficiently. The team support is outstanding and the features are exactly what we needed for our growth journey.",
    author: "JOHN SMITH",
    role: "CEO of TechCorp",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAMFBMVEXY2Nitra3Gxsbb29uqqqqxsbHT09PQ0NC0tLS9vb26urrKysrCwsK3t7fNzc2np6d/lbmlAAADmklEQVR4nO2byZLjIAxAwWKxjZf//9sGd8eT9CQYhASeKV7lkOMrFiEjIUSn0+m0AACEMdYaa47/t8EOs9ZayvDT4+zMHeTAuFnuSj6jdj1toq0cmEmrV60fOamXhm6wrfs7rR85tZg2biCmj1Y/bnppsuCGt9P4e1K32mog1muvw22pqwZbktb3lJqaYkOymEfbesO2pM3kOWy19ihkinlcFTUYssXqjBq4fDEP/zYAgxKTmn3QjEaJSTUzq8GMGzKvxrsLwO1IsbALOM2wc3mYcc4nTNi5PHB8Zsh9+WBkE4O5SEyqgWs+bZkYY1BDR4wTrpVW6iXlyuKFOcn/giWmQUEse6AmjpVmCcx49kB+vviOjcGsfGcGOEIahZc/POnFLMmQSfpvPJKY4VGW3KzwzDzNyI8Bimh2mNHfJlCZkeePhkbMJ2nUZsUZ0AmxGdzXLP1a6gLVzbrZZ267A+jM6HNHKrP1tqcT+ZcAjERm5Cc6XJVyUs3IPwSoMkeGL87Ce6AHHPdBJFuA4wvlvl91ebWmj3BcbJBkteQZbQDWcjGmW0dcWecVDi9BsDtZdmag/DaI4yYoUFKnOGBZ/wFEyfUF+juNP5SJca0yUXysMw6ZEAVZGnPnhsVXETWnV9F8ss5lADmfO1s17ARQYjwlil9mqC9PvtJmoRrz6j/VXLZYrXaq3FGrNGLfajo9eHAeSu9IbNnzVG7aCx8sKW5KV2909AfVmNCBOTVpXAV34abWin2Er2oiNqV+Ilt2IcO2vtumSump1XidbsIMq9yfun6V2uXkGjVG/wLAuGVex8A6LU7coQn/5HyvcCurTue/J7wastvgBizOWUv/pAfENo1af4dRHDK8N9JjiHV0Wj7Gq8hDmDyUGgeaYwvMnJG+prnJmeDosiv+tiDCvpZ9sIOYk/JWBEpOJQuOpgDwya2gQaisEzrBbUYNW9Z3GxbMox7YKoh5sj+s8u8HsOQ+ZyBrzrgk86UFSedsKllrraZY1j1R+pUFBSq5sFJaKMlXS7woxb60KlFLPESJOkZySGsVoiiv5pJUKYYGYkn7k6yTJY+UklSDVXaoXZq1WGWH2dVKg7pB9onLRz0sWX8S8ZjWaP0H1HAxma3EpIq3PxZ3PZSoRc3oembz2aMLrVXMCMTjRu3854XoWwuarjwksQSy4daU8Xo21fMcHLF8A9dV0M26WTfrZt2sm3WzbtbNulk3+8fMvgAq0zkY2Kvf4QAAAABJRU5ErkJggg==",
  },
  {
    id: 3,
    text: "The results speak for themselves. We've seen a 300% increase in productivity since implementing this solution. Highly recommended for any growing business.",
    author: "SARAH JOHNSON",
    role: "Product Manager at InnovateLab",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAMFBMVEXY2Nitra3Gxsbb29uqqqqxsbHT09PQ0NC0tLS9vb26urrKysrCwsK3t7fNzc2np6d/lbmlAAADmklEQVR4nO2byZLjIAxAwWKxjZf//9sGd8eT9CQYhASeKV7lkOMrFiEjIUSn0+m0AACEMdYaa47/t8EOs9ZayvDT4+zMHeTAuFnuSj6jdj1toq0cmEmrV60fOamXhm6wrfs7rR85tZg2biCmj1Y/bnppsuCGt9P4e1K32mog1muvw22pqwZbktb3lJqaYkOymEfbesO2pM3kOWy19ihkinlcFTUYssXqjBq4fDEP/zYAgxKTmn3QjEaJSTUzq8GMGzKvxrsLwO1IsbALOM2wc3mYcc4nTNi5PHB8Zsh9+WBkE4O5SEyqgWs+bZkYY1BDR4wTrpVW6iXlyuKFOcn/giWmQUEse6AmjpVmCcx49kB+vviOjcGsfGcGOEIahZc/POnFLMmQSfpvPJKY4VGW3KzwzDzNyI8Bimh2mNHfJlCZkeePhkbMJ2nUZsUZ0AmxGdzXLP1a6gLVzbrZZ267A+jM6HNHKrP1tqcT+ZcAjERm5Cc6XJVyUs3IPwSoMkeGL87Ce6AHHPdBJFuA4wvlvl91ebWmj3BcbJBkteQZbQDWcjGmW0dcWecVDi9BsDtZdmag/DaI4yYoUFKnOGBZ/wFEyfUF+juNP5SJca0yUXysMw6ZEAVZGnPnhsVXETWnV9F8ss5lADmfO1s17ARQYjwlil9mqC9PvtJmoRrz6j/VXLZYrXaq3FGrNGLfajo9eHAeSu9IbNnzVG7aCx8sKW5KV2909AfVmNCBOTVpXAV34abWin2Er2oiNqV+Ilt2IcO2vtumSump1XidbsIMq9yfun6V2uXkGjVG/wLAuGVex8A6LU7coQn/5HyvcCurTue/J7wastvgBizOWUv/pAfENo1af4dRHDK8N9JjiHV0Wj7Gq8hDmDyUGgeaYwvMnJG+prnJmeDosiv+tiDCvpZ9sIOYk/JWBEpOJQuOpgDwya2gQaisEzrBbUYNW9Z3GxbMox7YKoh5sj+s8u8HsOQ+ZyBrzrgk86UFSedsKllrraZY1j1R+pUFBSq5sFJaKMlXS7woxb60KlFLPESJOkZySGsVoiiv5pJUKYYGYkn7k6yTJY+UklSDVXaoXZq1WGWH2dVKg7pB9onLRz0sWX8S8ZjWaP0H1HAxma3EpIq3PxZ3PZSoRc3oembz2aMLrVXMCMTjRu3854XoWwuarjwksQSy4daU8Xo21fMcHLF8A9dV0M26WTfrZt2sm3WzbtbNulk3+8fMvgAq0zkY2Kvf4QAAAABJRU5ErkJggg==",
  },
  {
    id: 4,
    text: "Exceptional service and incredible results. The platform is intuitive and the support team goes above and beyond to ensure our success every step of the way.",
    author: "MICHAEL CHEN",
    role: "CTO of StartupXYZ",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAMFBMVEXY2Nitra3Gxsbb29uqqqqxsbHT09PQ0NC0tLS9vb26urrKysrCwsK3t7fNzc2np6d/lbmlAAADmklEQVR4nO2byZLjIAxAwWKxjZf//9sGd8eT9CQYhASeKV7lkOMrFiEjIUSn0+m0AACEMdYaa47/t8EOs9ZayvDT4+zMHeTAuFnuSj6jdj1toq0cmEmrV60fOamXhm6wrfs7rR85tZg2biCmj1Y/bnppsuCGt9P4e1K32mog1muvw22pqwZbktb3lJqaYkOymEfbesO2pM3kOWy19ihkinlcFTUYssXqjBq4fDEP/zYAgxKTmn3QjEaJSTUzq8GMGzKvxrsLwO1IsbALOM2wc3mYcc4nTNi5PHB8Zsh9+WBkE4O5SEyqgWs+bZkYY1BDR4wTrpVW6iXlyuKFOcn/giWmQUEse6AmjpVmCcx49kB+vviOjcGsfGcGOEIahZc/POnFLMmQSfpvPJKY4VGW3KzwzDzNyI8Bimh2mNHfJlCZkeePhkbMJ2nUZsUZ0AmxGdzXLP1a6gLVzbrZZ267A+jM6HNHKrP1tqcT+ZcAjERm5Cc6XJVyUs3IPwSoMkeGL87Ce6AHHPdBJFuA4wvlvl91ebWmj3BcbJBkteQZbQDWcjGmW0dcWecVDi9BsDtZdmag/DaI4yYoUFKnOGBZ/wFEyfUF+juNP5SJca0yUXysMw6ZEAVZGnPnhsVXETWnV9F8ss5lADmfO1s17ARQYjwlil9mqC9PvtJmoRrz6j/VXLZYrXaq3FGrNGLfajo9eHAeSu9IbNnzVG7aCx8sKW5KV2909AfVmNCBOTVpXAV34abWin2Er2oiNqV+Ilt2IcO2vtumSump1XidbsIMq9yfun6V2uXkGjVG/wLAuGVex8A6LU7coQn/5HyvcCurTue/J7wastvgBizOWUv/pAfENo1af4dRHDK8N9JjiHV0Wj7Gq8hDmDyUGgeaYwvMnJG+prnJmeDosiv+tiDCvpZ9sIOYk/JWBEpOJQuOpgDwya2gQaisEzrBbUYNW9Z3GxbMox7YKoh5sj+s8u8HsOQ+ZyBrzrgk86UFSedsKllrraZY1j1R+pUFBSq5sFJaKMlXS7woxb60KlFLPESJOkZySGsVoiiv5pJUKYYGYkn7k6yTJY+UklSDVXaoXZq1WGWH2dVKg7pB9onLRz0sWX8S8ZjWaP0H1HAxma3EpIq3PxZ3PZSoRc3oembz2aMLrVXMCMTjRu3854XoWwuarjwksQSy4daU8Xo21fMcHLF8A9dV0M26WTfrZt2sm3WzbtbNulk3+8fMvgAq0zkY2Kvf4QAAAABJRU5ErkJggg==",
  },
  {
    id: 5,
    text: "This platform transformed our business operations completely. The ROI has been incredible and our team couldn't be happier with the results we're seeing.",
    author: "EMILY DAVIS",
    role: "Operations Director at GrowthCo",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAMFBMVEXY2Nitra3Gxsbb29uqqqqxsbHT09PQ0NC0tLS9vb26urrKysrCwsK3t7fNzc2np6d/lbmlAAADmklEQVR4nO2byZLjIAxAwWKxjZf//9sGd8eT9CQYhASeKV7lkOMrFiEjIUSn0+m0AACEMdYaa47/t8EOs9ZayvDT4+zMHeTAuFnuSj6jdj1toq0cmEmrV60fOamXhm6wrfs7rR85tZg2biCmj1Y/bnppsuCGt9P4e1K32mog1muvw22pqwZbktb3lJqaYkOymEfbesO2pM3kOWy19ihkinlcFTUYssXqjBq4fDEP/zYAgxKTmn3QjEaJSTUzq8GMGzKvxrsLwO1IsbALOM2wc3mYcc4nTNi5PHB8Zsh9+WBkE4O5SEyqgWs+bZkYY1BDR4wTrpVW6iXlyuKFOcn/giWmQUEse6AmjpVmCcx49kB+vviOjcGsfGcGOEIahZc/POnFLMmQSfpvPJKY4VGW3KzwzDzNyI8Bimh2mNHfJlCZkeePhkbMJ2nUZsUZ0AmxGdzXLP1a6gLVzbrZZ267A+jM6HNHKrP1tqcT+ZcAjERm5Cc6XJVyUs3IPwSoMkeGL87Ce6AHHPdBJFuA4wvlvl91ebWmj3BcbJBkteQZbQDWcjGmW0dcWecVDi9BsDtZdmag/DaI4yYoUFKnOGBZ/wFEyfUF+juNP5SJca0yUXysMw6ZEAVZGnPnhsVXETWnV9F8ss5lADmfO1s17ARQYjwlil9mqC9PvtJmoRrz6j/VXLZYrXaq3FGrNGLfajo9eHAeSu9IbNnzVG7aCx8sKW5KV2909AfVmNCBOTVpXAV34abWin2Er2oiNqV+Ilt2IcO2vtumSump1XidbsIMq9yfun6V2uXkGjVG/wLAuGVex8A6LU7coQn/5HyvcCurTue/J7wastvgBizOWUv/pAfENo1af4dRHDK8N9JjiHV0Wj7Gq8hDmDyUGgeaYwvMnJG+prnJmeDosiv+tiDCvpZ9sIOYk/JWBEpOJQuOpgDwya2gQaisEzrBbUYNW9Z3GxbMox7YKoh5sj+s8u8HsOQ+ZyBrzrgk86UFSedsKllrraZY1j1R+pUFBSq5sFJaKMlXS7woxb60KlFLPESJOkZySGsVoiiv5pJUKYYGYkn7k6yTJY+UklSDVXaoXZq1WGWH2dVKg7pB9onLRz0sWX8S8ZjWaP0H1HAxma3EpIq3PxZ3PZSoRc3oembz2aMLrVXMCMTjRu3854XoWwuarjwksQSy4daU8Xo21fMcHLF8A9dV0M26WTfrZt2sm3WzbtbNulk3+8fMvgAq0zkY2Kvf4QAAAABJRU5ErkJggg==",
  },
  {
    id: 6,
    text: "Outstanding customer service and a product that delivers on every promise. We've recommended this solution to all our business partners.",
    author: "DAVID WILSON",
    role: "Marketing Lead at BrandForce",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAMFBMVEXY2Nitra3Gxsbb29uqqqqxsbHT09PQ0NC0tLS9vb26urrKysrCwsK3t7fNzc2np6d/lbmlAAADmklEQVR4nO2byZLjIAxAwWKxjZf//9sGd8eT9CQYhASeKV7lkOMrFiEjIUSn0+m0AACEMdYaa47/t8EOs9ZayvDT4+zMHeTAuFnuSj6jdj1toq0cmEmrV60fOamXhm6wrfs7rR85tZg2biCmj1Y/bnppsuCGt9P4e1K32mog1muvw22pqwZbktb3lJqaYkOymEfbesO2pM3kOWy19ihkinlcFTUYssXqjBq4fDEP/zYAgxKTmn3QjEaJSTUzq8GMGzKvxrsLwO1IsbALOM2wc3mYcc4nTNi5PHB8Zsh9+WBkE4O5SEyqgWs+bZkYY1BDR4wTrpVW6iXlyuKFOcn/giWmQUEse6AmjpVmCcx49kB+vviOjcGsfGcGOEIahZc/POnFLMmQSfpvPJKY4VGW3KzwzDzNyI8Bimh2mNHfJlCZkeePhkbMJ2nUZsUZ0AmxGdzXLP1a6gLVzbrZZ267A+jM6HNHKrP1tqcT+ZcAjERm5Cc6XJVyUs3IPwSoMkeGL87Ce6AHHPdBJFuA4wvlvl91ebWmj3BcbJBkteQZbQDWcjGmW0dcWecVDi9BsDtZdmag/DaI4yYoUFKnOGBZ/wFEyfUF+juNP5SJca0yUXysMw6ZEAVZGnPnhsVXETWnV9F8ss5lADmfO1s17ARQYjwlil9mqC9PvtJmoRrz6j/VXLZYrXaq3FGrNGLfajo9eHAeSu9IbNnzVG7aCx8sKW5KV2909AfVmNCBOTVpXAV34abWin2Er2oiNqV+Ilt2IcO2vtumSump1XidbsIMq9yfun6V2uXkGjVG/wLAuGVex8A6LU7coQn/5HyvcCurTue/J7wastvgBizOWUv/pAfENo1af4dRHDK8N9JjiHV0Wj7Gq8hDmDyUGgeaYwvMnJG+prnJmeDosiv+tiDCvpZ9sIOYk/JWBEpOJQuOpgDwya2gQaisEzrBbUYNW9Z3GxbMox7YKoh5sj+s8u8HsOQ+ZyBrzrgk86UFSedsKllrraZY1j1R+pUFBSq5sFJaKMlXS7woxb60KlFLPESJOkZySGsVoiiv5pJUKYYGYkn7k6yTJY+UklSDVXaoXZq1WGWH2dVKg7pB9onLRz0sWX8S8ZjWaP0H1HAxma3EpIq3PxZ3PZSoRc3oembz2aMLrVXMCMTjRu3854XoWwuarjwksQSy4daU8Xo21fMcHLF8A9dV0M26WTfrZt2sm3WzbtbNulk3+8fMvgAq0zkY2Kvf4QAAAABJRU5ErkJggg==",
  },
  {
    id: 7,
    text: "The implementation was seamless and the results were immediate. This solution has become an integral part of our daily operations and success strategy.",
    author: "ALEX RODRIGUEZ",
    role: "Founder of NewVenture",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAMFBMVEXY2Nitra3Gxsbb29uqqqqxsbHT09PQ0NC0tLS9vb26urrKysrCwsK3t7fNzc2np6d/lbmlAAADmklEQVR4nO2byZLjIAxAwWKxjZf//9sGd8eT9CQYhASeKV7lkOMrFiEjIUSn0+m0AACEMdYaa47/t8EOs9ZayvDT4+zMHeTAuFnuSj6jdj1toq0cmEmrV60fOamXhm6wrfs7rR85tZg2biCmj1Y/bnppsuCGt9P4e1K32mog1muvw22pqwZbktb3lJqaYkOymEfbesO2pM3kOWy19ihkinlcFTUYssXqjBq4fDEP/zYAgxKTmn3QjEaJSTUzq8GMGzKvxrsLwO1IsbALOM2wc3mYcc4nTNi5PHB8Zsh9+WBkE4O5SEyqgWs+bZkYY1BDR4wTrpVW6iXlyuKFOcn/giWmQUEse6AmjpVmCcx49kB+vviOjcGsfGcGOEIahZc/POnFLMmQSfpvPJKY4VGW3KzwzDzNyI8Bimh2mNHfJlCZkeePhkbMJ2nUZsUZ0AmxGdzXLP1a6gLVzbrZZ267A+jM6HNHKrP1tqcT+ZcAjERm5Cc6XJVyUs3IPwSoMkeGL87Ce6AHHPdBJFuA4wvlvl91ebWmj3BcbJBkteQZbQDWcjGmW0dcWecVDi9BsDtZdmag/DaI4yYoUFKnOGBZ/wFEyfUF+juNP5SJca0yUXysMw6ZEAVZGnPnhsVXETWnV9F8ss5lADmfO1s17ARQYjwlil9mqC9PvtJmoRrz6j/VXLZYrXaq3FGrNGLfajo9eHAeSu9IbNnzVG7aCx8sKW5KV2909AfVmNCBOTVpXAV34abWin2Er2oiNqV+Ilt2IcO2vtumSump1XidbsIMq9yfun6V2uXkGjVG/wLAuGVex8A6LU7coQn/5HyvcCurTue/J7wastvgBizOWUv/pAfENo1af4dRHDK8N9JjiHV0Wj7Gq8hDmDyUGgeaYwvMnJG+prnJmeDosiv+tiDCvpZ9sIOYk/JWBEpOJQuOpgDwya2gQaisEzrBbUYNW9Z3GxbMox7YKoh5sj+s8u8HsOQ+ZyBrzrgk86UFSedsKllrraZY1j1R+pUFBSq5sFJaKMlXS7woxb60KlFLPESJOkZySGsVoiiv5pJUKYYGYkn7k6yTJY+UklSDVXaoXZq1WGWH2dVKg7pB9onLRz0sWX8S8ZjWaP0H1HAxma3EpIq3PxZ3PZSoRc3oembz2aMLrVXMCMTjRu3854XoWwuarjwksQSy4daU8Xo21fMcHLF8A9dV0M26WTfrZt2sm3WzbtbNulk3+8fMvgAq0zkY2Kvf4QAAAABJRU5ErkJggg==",
  },
  {
    id: 8,
    text: "Incredible value and exceptional support. The platform has helped us streamline our processes and achieve goals we never thought possible.",
    author: "LISA CHEN",
    role: "VP of Operations at ScaleUp",
    avatar:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAMFBMVEXY2Nitra3Gxsbb29uqqqqxsbHT09PQ0NC0tLS9vb26urrKysrCwsK3t7fNzc2np6d/lbmlAAADmklEQVR4nO2byZLjIAxAwWKxjZf//9sGd8eT9CQYhASeKV7lkOMrFiEjIUSn0+m0AACEMdYaa47/t8EOs9ZayvDT4+zMHeTAuFnuSj6jdj1toq0cmEmrV60fOamXhm6wrfs7rR85tZg2biCmj1Y/bnppsuCGt9P4e1K32mog1muvw22pqwZbktb3lJqaYkOymEfbesO2pM3kOWy19ihkinlcFTUYssXqjBq4fDEP/zYAgxKTmn3QjEaJSTUzq8GMGzKvxrsLwO1IsbALOM2wc3mYcc4nTNi5PHB8Zsh9+WBkE4O5SEyqgWs+bZkYY1BDR4wTrpVW6iXlyuKFOcn/giWmQUEse6AmjpVmCcx49kB+vviOjcGsfGcGOEIahZc/POnFLMmQSfpvPJKY4VGW3KzwzDzNyI8Bimh2mNHfJlCZkeePhkbMJ2nUZsUZ0AmxGdzXLP1a6gLVzbrZZ267A+jM6HNHKrP1tqcT+ZcAjERm5Cc6XJVyUs3IPwSoMkeGL87Ce6AHHPdBJFuA4wvlvl91ebWmj3BcbJBkteQZbQDWcjGmW0dcWecVDi9BsDtZdmag/DaI4yYoUFKnOGBZ/wFEyfUF+juNP5SJca0yUXysMw6ZEAVZGnPnhsVXETWnV9F8ss5lADmfO1s17ARQYjwlil9mqC9PvtJmoRrz6j/VXLZYrXaq3FGrNGLfajo9eHAeSu9IbNnzVG7aCx8sKW5KV2909AfVmNCBOTVpXAV34abWin2Er2oiNqV+Ilt2IcO2vtumSump1XidbsIMq9yfun6V2uXkGjVG/wLAuGVex8A6LU7coQn/5HyvcCurTue/J7wastvgBizOWUv/pAfENo1af4dRHDK8N9JjiHV0Wj7Gq8hDmDyUGgeaYwvMnJG+prnJmeDosiv+tiDCvpZ9sIOYk/JWBEpOJQuOpgDwya2gQaisEzrBbUYNW9Z3GxbMox7YKoh5sj+s8u8HsOQ+ZyBrzrgk86UFSedsKllrraZY1j1R+pUFBSq5sFJaKMlXS7woxb60KlFLPESJOkZySGsVoiiv5pJUKYYGYkn7k6yTJY+UklSDVXaoXZq1WGWH2dVKg7pB9onLRz0sWX8S8ZjWaP0H1HAxma3EpIq3PxZ3PZSoRc3oembz2aMLrVXMCMTjRu3854XoWwuarjwksQSy4daU8Xo21fMcHLF8A9dV0M26WTfrZt2sm3WzbtbNulk3+8fMvgAq0zkY2Kvf4QAAAABJRU5ErkJggg==",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allTestimonials, setAllTestimonials] = useState(testimonials);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate the maximum index (last possible starting position for 3 testimonials)
  const maxIndex = Math.max(0, allTestimonials.length - 3);

  // Get the current set of 3 testimonials to display
  const getCurrentTestimonials = () => {
    return allTestimonials.slice(currentIndex, currentIndex + 3);
  };

  // Handle next button click - advance by 1 position
  const handleNext = () => {
    if (currentIndex < maxIndex && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    }
  };

  // Handle previous button click - go back by 1 position
  const handlePrevious = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    }
  };

  // Add new testimonial
  const handleAddTestimonial = () => {
    const newTestimonials = [
      {
        id: allTestimonials.length + 1,
        text: "This is a dynamically added testimonial. The platform exceeded all our expectations and delivered remarkable results for our business growth.",
        author: "ROBERT TAYLOR",
        role: "Director at FastGrow",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      {
        id: allTestimonials.length + 2,
        text: "Seamless integration and outstanding performance. This solution has revolutionized how we approach our business challenges and opportunities.",
        author: "JENNIFER MARTINEZ",
        role: "Manager at TechFlow",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      {
        id: allTestimonials.length + 3,
        text: "Exceptional quality and reliable service. The team's dedication to customer success is evident in every interaction and feature.",
        author: "KEVIN BROWN",
        role: "Lead Developer at CodeCraft",
        avatar: "/placeholder.svg?height=48&width=48",
      },
    ];

    const randomTestimonial =
      newTestimonials[Math.floor(Math.random() * newTestimonials.length)];
    setAllTestimonials((prev) => [...prev, randomTestimonial]);
  };

  // Check if navigation buttons should be enabled
  const canGoNext = currentIndex < maxIndex;
  const canGoPrevious = currentIndex > 0;

  // Update maxIndex when testimonials change
  useEffect(() => {
    if (currentIndex > Math.max(0, allTestimonials.length - 3)) {
      setCurrentIndex(Math.max(0, allTestimonials.length - 3));
    }
  }, [allTestimonials.length, currentIndex]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-dm">
      {/* Green Gradient Background (z-10) */}
      <div
        className="absolute top-0 left-0 right-0 h-[55vh] z-10"
        style={{
          background: "linear-gradient(90deg, #000000 0%, #256B4A 100%)",
        }}
      />

      {/* Stacked Rings (z-20) - Behind text but above green gradient */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[1000px] h-[400px] z-20 pointer-events-none">
        {/* Outermost ring - largest and most transparent */}
        <div className="absolute top-0 right-0 w-[800px] h-[400px] opacity-15">
          <img
            src="/testimonial/ellipse.png"
            alt=""
            fill
            className="object-contain"
            style={{ transform: "scale(2.2)" }}
          />
        </div>
        {/* Second ring */}
        <div className="absolute top-4 right-8 w-[700px] h-[350px] opacity-25">
          <img
            src="/testimonial/ellipse.png"
            alt=""
            fill
            className="object-contain"
            style={{ transform: "scale(1.8)" }}
          />
        </div>
        {/* Third ring */}
        <div className="absolute top-8 right-16 w-[600px] h-[300px] opacity-35">
          <img
            src="/testimonial/ellipse.png"
            alt=""
            fill
            className="object-contain"
            style={{ transform: "scale(1.4)" }}
          />
        </div>
        {/* Innermost ring - smallest and most visible */}
        <div className="absolute top-12 right-24 w-[500px] h-[250px] opacity-50">
          <img
            src="/testimonial/ellipse.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Black Gradient Overlay (z-30) - Above rings */}
      <div
        className="absolute top-0 left-0 right-0 h-[55vh] z-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Icons positioned around rings (z-40) */}
      {/* Icons positioned around rings (z-40) */}
      <div className="absolute z-40 w-full h-full">
        {/* Bell Icon - Top Right */}
        <div className="absolute top-12 right-24 w-12 h-12">
          <img
            src="/testimonial/bell-icon.png"
            alt="Bell"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Rocket Icon - Middle Right */}
        <div className="absolute top-32 right-12 w-12 h-12">
          <img
            src="/testimonial/rocket-icon.png"
            alt="Rocket"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Calendar Icon - Lower Right */}
        <div className="absolute top-52 right-20 w-12 h-12">
          <img
            src="/testimonial/calendar-icon.png"
            alt="Calendar"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main Content (z-50) - Above all other layers */}
      <div className="relative z-50 container mx-auto px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-24 pt-8">
          <p className="text-sm font-medium text-gray-400 mb-6 tracking-wider uppercase">
            TRUSTED BY
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Members who took small steps
            <br />
            and saw big changes
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Section - Real Stories */}
          <div className="lg:col-span-4 relative">
            <div className="mb-8">
              <Button
                variant="outline"
                size="sm"
                className="border-[#91FFAE] text-[#91FFAE] bg-transparent hover:bg-[#91FFAE] hover:text-black rounded-full px-6 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </Button>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight">
              Real Stories,
              <br />
              Real Growth
            </h2>

            {/* Bottom Left Graphic - positioned below "Real Growth" */}
            <div className="absolute shadow-3xl shadow-green-600 -bottom-20 -left-4 h-56  opacity-80 hidden lg:block">
              <img
                src="/testimonial/graph.png"
                alt=""
                fill
                className="object-contain h-full w-full"
              />
            </div>

            {/* Navigation Arrows */}
            <div className="space-y-4">
              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  disabled={!canGoPrevious || isTransitioning}
                  className=" z-[200] rounded-full border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent w-12 h-12 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  disabled={!canGoNext || isTransitioning}
                  className=" z-[200] rounded-full border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent w-12 h-12 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next testimonials"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section - Testimonials */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
                  isTransitioning
                    ? "opacity-0 transform translate-x-4"
                    : "opacity-100 transform translate-x-0"
                }`}
              >
                {getCurrentTestimonials().map((testimonial, index) => (
                  <Card
                    key={`${testimonial.id}-${currentIndex}`}
                    className="border-0 shadow-none min-h-80 h-full transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "#083E34",
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <svg
                          width="32"
                          height="24"
                          viewBox="0 0 32 24"
                          fill="none"
                          className="text-[#91FFAE]"
                        >
                          <path
                            d="M0 24V12C0 5.373 5.373 0 12 0h2v4h-2c-4.418 0-8 3.582-8 8v2h6v10H0zm18 0V12c0-6.627 5.373-12 12-12h2v4h-2c-4.418 0-8 3.582-8 8v2h6v10H18z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-300 text-md leading-relaxed mb-6 flex-grow">
                        {testimonial.text}
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-600 flex-shrink-0">
                          <img
                            src={testimonial.avatar || ""}
                            alt={testimonial.author}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">
                            {testimonial.author}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-8 lg:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                disabled={!canGoPrevious || isTransitioning}
                className="rounded-full border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent w-12 h-12 transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={!canGoNext || isTransitioning}
                className="rounded-full border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent w-12 h-12 transition-colors disabled:opacity-50"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
