---
title: 'KaTeX 数学公式指南'
description: '在 Astro 博客中使用 KaTeX 渲染数学公式的完整示例'
pubDate: '2026-03-28'
heroImage: '../../assets/blog-placeholder-3.jpg'
tags: ['KaTeX', '数学', 'Markdown', '教程']
---

# KaTeX 数学公式指南

本文展示了如何在 Astro 博客中使用 KaTeX 渲染各种数学公式。

## 行内公式

行内公式使用单个 `$` 包裹：

- 质能方程：$E=mc^2$
- 欧拉公式：$e^{i\pi}+1=0$
- 二次方程求根：$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$
- 导数：$f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}$

## 块级公式

块级公式使用 `$$` 包裹：

### 定积分

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

### 偏微分方程

$$
\frac{\partial u}{\partial t} = \nabla^2 u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2}
$$

### 矩阵

$$
A = \begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}
$$

### 求和与连乘

$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$

$$
\prod_{i=1}^{n} x_i = x_1 \times x_2 \times \cdots \times x_n
$$

### 极限

$$
\lim_{x \to \infty} \frac{1}{x} = 0
$$

$$
\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$

## 常用数学符号

### 希腊字母

- $\alpha$ `\alpha`
- $\beta$ `\beta`
- $\gamma$ `\gamma`
- $\delta$ `\delta`
- $\epsilon$ `\epsilon`
- $\theta$ `\theta`
- $\lambda$ `\lambda`
- $\mu$ `\mu`
- $\pi$ `\pi`
- $\sigma$ `\sigma`
- $\phi$ `\phi`
- $\omega$ `\omega`

### 上下标

- 上标：$x^2$, $a^{n+1}$
- 下标：$x_i$, $a_{ij}$
- 上下标组合：$x_i^j$, $\sum_{i=1}^{n}$

### 分数

$$
\frac{1}{2}, \quad \frac{x+y}{x-y}, \quad \frac{\partial f}{\partial x}
$$

### 根号

$$
\sqrt{2}, \quad \sqrt[n]{x}, \quad \sqrt{x^2 + y^2}
$$

### 关系符号

- 等于：$=$
- 不等于：$\neq$
- 小于：$<$
- 大于：$>$
- 小于等于：$\leq$
- 大于等于：$\geq$
- 约等于：$\approx$
- 正比于：$\propto$

### 运算符

- 加减：$\pm$, $\mp$
- 乘：$\times$, $\cdot$, $\ast$
- 除：$\div$, $/$
- 点积：$\cdot$
- 叉积：$\times$
- 并集：$\cup$
- 交集：$\cap$
- 属于：$\in$
- 包含于：$\subset$

## 高级示例

### 高斯积分

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

### 傅里叶变换

$$
F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
$$

### 麦克斯韦方程组

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0\varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

### 爱因斯坦场方程

$$
G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu}
$$

### 泰勒展开

$$
f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots
$$

### 二项式定理

$$
(x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} y^k
$$

### 贝叶斯定理

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

## 公式编号

使用 `\tag` 可以给公式编号：

$$
E = mc^2 \tag{1}
$$

$$
F = ma \tag{2}
$$

## 分段函数

$$
f(x) = \begin{cases}
x^2 & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$

## 对齐多行公式

使用 `aligned` 环境：

$$
\begin{aligned}
a &= b + c \\
  &= d + e + f \\
  &= g + h + i + j
\end{aligned}
$$

## 结论

KaTeX 是一个快速、易用的数学公式渲染库，非常适合在 Astro 博客中使用。通过 `remark-math` 和 `rehype-katex` 插件，你可以轻松地在 Markdown 中编写数学公式。

更多 KaTeX 支持的命令和符号，请参考 [KaTeX 官方文档](https://katex.org/docs/supported.html)。
