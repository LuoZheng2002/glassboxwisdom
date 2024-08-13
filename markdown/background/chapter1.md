# What Do AIs Share in Common?

Artificial Intelligence sounds like something intelligent and automatic, but beyond that, it is hard to tell what it is exactly. Therefore, there is plenty of room for us to define it and implement it according to our definitions.

Machine learning can be AI. Data analysis can be AI. "AI for Science" can be AI. However, these "AI"s do not appear to be intelligent in a broad sense, especially to those who do not know technology. Products like face detection, AlphaGo, or ChatGPT, demonstrate intelligence in some ways, but are still far from AIs depicted in sci-fi movies in terms of general intelligence. It might be surprising that when we talk about AIs nowadays, we no longer expect something like T-800, Red Queen or GLaDOS, but only expect them to do one or two specific things for us. It is not because we do not dream wild, but because human-level intelligence is very hard, so hard that millions of IT researchers have been working for nearly a century long but yet cannot find a prospective solution.


<div style="display: flex; align-items: flex-start">
    <img src="/images/t800.webp" alt="T-800" style="width: 30%; height: auto; float: left" title="T-800 is an artificial intelligence in the movie Terminator functioning as a great assassination weapon. While an android for his appearance, he is usually described as a cyborg consisting of living tissue over a robotic endoskeleton.">
    <img src="/images/redqueen.webp" alt="Red Queen" style="width: 30%; height: auto; float: left" title="Red Queen is an artificial intelligence in the movie Biohazard. She attempted to stop the main character group to enter the infected building so that the lethal virus does not spread out.">
    <img src="/images/glados.webp" alt="GLaDOS" style="width: 30%; height: auto; float: left" title="GLaDOS is an artificial intelligence in the game Portal. She tries to kill the main character by prompting her to go through puzzles with a portal gun.">
</div>

But what is the difficulty exactly? Let's first take a look at another problem considered very hard by early mathematicians: the Hilbert's program. This program soughts to formalize all of mathematics using a finite set of axioms and prove that these axioms were both consistent (free of contradictions) and complete (capable of proving every truth within the system). However, this problem was later strictly proved to be unsolvable by Godel's Incompleteness Theorems, which you may have heard of because it is one of the most influential conclusions in mathematical logic. Another example is the halting problem, which is also proved unsolvable using a very simple idea of inspecting the diagonal entries of an infinite table, similar to how we prove real numbers are uncountable. Therefore, instead of diving into the construction of a complicated computer program with "if", "for" and "while" statements, we instead inspect the broadest picture, artfully adopt a simple and unified strategy, and end up eradicating the problem once and for all.

<div style="display: flex; align-items: flex-start">
    <img src="/images/godel.jpeg" alt="godel" style="width: 30%; height: auto; float: left" title="Godel's Incompleteness Theorems">
    <img src="/images/halting.png" alt="halting" style="width: 30%; height: auto; float: left" title="The Halting Problem">
    <img src="/images/barber.png" alt="barber" style="width: 30%; height: auto; float: left" title="The Barber Paradox">
</div>

Apart from mathematics, we also encounter situations in physics where we diligently come up with ideas from various specific perspectives, try and fail, and end up realizing what we have tried to achieve is already proven impossible by a general and unified law. For example, the perpetual motion machine. Because we have learned about thermodynamics, we would have pity on those who are dedicated to inventing such a machine, no matter what they use, fluid, gravity, torque, or magnet. We don't even need to take a look at the ideas before we know they are all flawed. This is the power of a unified law: instead of diving into a specific idea, we need to first look at the broadest image with the strongest credibility, so that we are adviced of potential traps and deadends, and thus focus on the remaining options.

<div style="display: flex; align-items: flex-start">
    <img src="/images/perp.png" alt="perp1" style="width: 50%; height: auto; float: left" title="Perpetual Motion Machine">
    <img src="/images/perp2.jpg" alt="perp2" style="width: 50%; height: auto; float: left" title="Perpetual Motion Machine">
    
</div>
<div style="display: flex; align-items: flex-start">
    <img src="/images/perp3.jpg" alt="perp3" style="width: 40%; height: auto; float: left" title="Perpetual Motion Machine">
    <img src="/images/buttercat.gif" alt="butter cat" style="width: 60%; height: auto; float: left" title="Perpetual Motion Machine Powered by Buttered Cat">
</div>

Therefore, if such a law exists in the field of AI, we might get important insights from it, including the prospective approaches to achieve AGI and the limitations of the AGI product. **I think I have found a unified pattern that agrees with and explains all the existing AI approaches.** It is a **"trilemma"** (three features that we desire, but at most two of them can be achieved at the same time) and the three conflicting elements are: **flexibility, controllability, and developer friendliness**.

<div style="display: flex; align-items: flex-start">
    <span style="width: 10%"></span>
    <img src="/images/trilemma.png" alt="trilemma" style="width: 80%; height: auto; float: left" title="The trilemma">
</div>

# Flexibility
A flexible AI can adapt to more situations than a rigid AI and get in line with human aesthetics better. For example, an AI with legs like human beings is more flexible than an AI with only wheels because the former can climb stairs. An AI that can read between lines is more flexible than a code compiler because people can interact with it more casually. While a flexible AI is more welcomed, it may not have more core features than a rigid AI. This means that a rigid AI can also be general-purpose and greatly help us with our work, but at the cost of efficiency, convenience and visual aesthetics.

<div style="display: flex; align-items: flex-start">
    <img src="/images/hand1.gif" alt="hand simulator" style="width: 50%; height: auto; float: left" title="In the game Hand Simulator, the hands move rigidly like a CNC machine, but are still promising to get the jobs done.">
    <img src="/images/jackie.gif" alt="jackie" style="width: 50%; height: auto; float: left" title="A flexible real-time combat.">
</div>

# Controllability
A controllable AI may not behave as its developers wish, but is guaranteed to behave as its developers expect. Whenever a bug is found, developers can completely fix it in finite amount of time without introducing immediately visible side effects. This ensures maintainability as the project scales. It can be achieved with various approaches, but the most direct one is to make its working principle transparent so that we can use techniques like stack trace and breakpoints to debug AI, just like how we debug a computer program. However, even in this way, we still meet with problems we cannot easily tackle with, such as failing to expose bugs, dealing with spaghetti code, fixing one bug by introducing several new ones, etc.

<div style="display: flex; align-items: flex-start">
    <span style="width: 10%"></span>
    <img src="/images/pour.gif" alt="spilt coffee" style="width: 80%; height: auto; float: left" title="An example of failing to control even though we fully understand what is going on.">
</div>

# Developer Friendliness
An intuitive definition of "developer friendliness" is that the task does not cause developers to feel tedious and painful. A quantitative definition can be how much thinking an average computer scientist (with professional knowledge) needs in order to write a computer program, which can be measured by how much time it takes for the developer to finish coding the program. It is not recommended to implement an idea that is not developer friendly because it may (1)take too much time to finish even under teamwork, (2)lead to irreversible intellectual harm to developers, and (3)may be impossible to carry out due to human's limited short-term memory and intellectual stamina. Therefore, some AI plans might be possible in theory, but turn out to be too complicated in design to carry out.

<div style="display: flex; align-items: flex-start">
    <span style="width: 20%"></span>
    <img src="/images/mess.jpg" alt="mess" style="width: 60%; height: auto; float: left" title="If the design itself is chaotic, then it is almost impossible to maintain.">
</div>

# The Trilemma
I am not able to prove it rigorously, but I can convince you. Let's see why the third feature cannot be achieved when we have chosen the first two.

# Flexibility & Developer Friendliness
Achieving flexibility is hard if we attempt to code the logic ourselves, because there are tons of rules and even more of exceptions in real-life situations. For example, a chat program may be designed to accept informal text input, with messed up logic, grammar, and even spelling errors. This takes a lot more effort compared with designing a code compiler. What makes matters worse is that most of the time we do not know how we ourselves come up with ideas that recognize the hidden patterns, or how we manage to view an image from different perspectives. Therefore, we have to do painstaking meta-thinking, or come up with a synthesized model that helps to achieve similar effects. Either way, achieving flexibility with explicit logic is very painful.

<div style="display: flex; align-items: flex-start">
    <span style="width: 30%"></span>
    <img src="/images/lamp.png" alt="lamp" style="width: 40%; height: auto; float: left" title="It's a lamp right? It definitely is.">
</div>

Apart from coding explicitly, we can also use "machine learning" to transform data into patterns. This turns out to be super effective, and completely beats human-written logic in flexibility when there is enough data and computation power. For example, the first generation of AlphaGo was trained with the help of existing matches between top human players, but it was then defeated by AlphaZero, a model that trained itself without referencing any human wisdom. This gives us a confusing conclusion: the effort we made is reduced, but the performance went even better. However, this is a dangerous illusion, because it encourages us to resort to brute force and blindly trust the power of "Universal Approximation Theorem". The price we pay, of course, is our control over the model's behavior.

<div style="display: flex; align-items: flex-start">
    <span style="width: 20%"></span>
    <img src="/images/lee.webp" alt="AlphaGo" style="width: 60%; height: auto; float: left" title="The Go game AI AlphaGo beat the top human player Lee Sedol, demonstrating the power of automatic pattern finding.">
</div>

When we solve systems of linear equations, we find that the more constraints there are, the more specific the solution will be. For example, the equation set

$$\begin{cases}x+2y+3z=9\\ x-y=0\\ y+z=4\\ \end{cases}$$

has the unique solution

$$\begin{cases}x=1\\ y=1\\ z=2 \end{cases}$$

But the equation set with one constraint removed

$$\begin{cases}x+2y+3z=9\\ x-y=0\\ \end{cases}$$

has infinite solutions that can be described with a line in a 3D space. Similarly, if we remove yet another constraint, we will get the solutions to be a plane in the 3D space. We can come to conclusion that the "degrees of freedom" of the solution equals the initial degrees of freedom (number of unknowns) minus the number of constraints we provide. Therefore, to ensure controllability, the number of constraints must be commensurate with the amount of freedom we gave to the model.

## What Constrains Machine Learning Models?

So, since machine learning or neural net based AIs have so many degrees of freedom, why do they end up behaving in the way we expect? Some argues that the tremendous amount of data effectively constrains what the weights look like, but it is not totally true. Compared with the infinite real numbers on the number axis, even a trillion data points look sparse. Given sufficient number of coefficients to shape the function, we can easily construct infinite instances of functions that go through a trillion data points. Note that modern deep neural networks with the "residual" feature can span layers like crazy, and they are designed to have weights discarded for the output if they evolve in the wrong direction, so the undetermined coefficients far outnumbers the training data. Therefore, a large amount of training data is not the determining factor for the weights to be constrained.

<div style="display: flex; align-items: flex-start">
    <span style="width: 10%"></span>
    <img src="/images/aliasing.webp" alt="aliasing" style="width: 80%; height: auto; float: left" title="Aliasing is a good example of showing how &quot;creative&quot; we can construct a function to go through data points.">
</div>

Apart from the training data, there must be something else that helps constrain the weights. Let's consider neural-net based model for simplicity.

Firstly, the design of the neural network implies that it is easier to form linear features rather than nonlinear ones. No matter what wraps the neural network, either reinforcement learning models, RNNs, or transformers, the building blocks of a network are always the few things: fully connected, convolution, activation, nomalization, residual, etc. Fully connected and convolution are linear; nomalization and residual are designed to stablize outputs, so the main source of nonlinearity comes from the activation layer. However, activation layer is not arbitrarily nonlinear, but features smooth curves or a bent line, which looks innocuous compared with crazy functions like the Weierstrass function. Therefore, to form logics like "exclusive or", several layers are needed and the weights in the linear layers are often stretched to unnatural values. This is not likely to happen because of the second factor: the gradient descent mechanism.

<div style="display: flex; align-items: flex-start">
    <img src="/images/activation.png" alt="activation" style="width: 50%; height: auto; float: left" title="Two most common activation functions that provide nonlinearity.">
    <img src="/images/weierstrass.png" alt="Weierstrass" style="width: 25%; height: auto; float: left" title="The Weierstrass function.">
    <img src="/images/xor.jpg" alt="GLaDOS" style="width: 25%; height: auto; float: left" title="A three-layer manual implementation of an XOR gate.">
</div>

The main characteristics of "gradient descent" in deep neural network is that it does AOE damage. No matter whether a weight is responsible for the final error, it is altered more or less based on its contribution. This is like pulling a plastic wrap: all the points on the wrap move towards the same direction more or less because of the cascading tension, which is not a good feature when you want to make something delicate. So, when two weights are close in relationship and contribute similarly to the output, they are unlikely to end up deviating from each other and serving different purposes. This discourages teamwork, thus discourages the formation of delicate nonlinear features. The strategies for dealing with "overfitting", like regularization, also encourages linear features and discourage nonlinear ones. Therefore, even if a network initially has some delicate nonlinear features like an "XOR" gate, it will eventually be "flattened" by gradient descent, and the output will depend more on linear combinations instead.

<div style="display: flex; align-items: flex-start">
    <img src="/images/plastic.webp" alt="plastic" style="width: 50%; height: auto; float: left" title="When you pull a plastic wrap, all the points on it will move to the same direction more or less.">
    <img src="/images/spongebob.gif" alt="spongebob" style="width: 50%; height: auto; float: left" title="This is not likely to happe in real life. Delicate details cannot form if we only apply macroscopic force.">
</div>

As a result, machine learning or deep learning models are mainly composed of linear features instead of nonlinear ones, but we have to thank it at last, because at least it prevents the model from forming weird and arbitrary nonlinear features and deviate even further away from the correct answer. This is also why the models manage to satisfy us: we are mainly linear too. For example, when we are given the problem "what is after 1, 2, 3 and 4", most people would answer 5 instead of 114514, although for the latter we can easily justify it using some Lagrange interpolation. When we make a decision, we typically consider the weighted sum of the pros and cons, instead of doing complex sequential computations, which also shows that we are basically "linear".

<div style="display: flex; align-items: flex-start">
    <span style="width: 20%"></span>
    <img src="/images/interpolation.png" alt="interpolation" style="width: 60%; height: auto; float: left" title="A polynomial function that goes through (1,1), (2,2), (3,3), (4,4) and (5, 114514) constructed with Lagrange interpolation.">
</div>

Now we encounter a dilemma. On one hand we enjoy the benefit of linearity in deep learning models because it constrains AIs easily and is sufficient to solve most of the easy problems. On the other hand, we want AIs to be smarter in order to solve more complex problems, which requires it to have more proportion of nonlinearity, but it is something unstable and hard to control under the Connectionist paradigm.

<div style="display: flex; align-items: flex-start">
    <span style="width: 20%"></span>
    <img src="/images/nonlinear.png" alt="nonlinear" style="width: 60%; height: auto; float: left" title="The bottleneck of connectionism lies in the control over nonlinear behaviors, so the proportion of nonlinearity has to be bounded.">
</div>

So what is the root of the conflict? It is that we do not put true efforts in AI development. In other words, we do not teach AIs in a down-to-earth way. We do not teach them English or Math ourselves. Instead, we feed them with textbooks. We do not clarify and correct their mistakes (fine tuning LLMs is a different story since it depends on upstream models to understand what we want), but only adjust hyperparameters. We give more "punishments" than explicit "explanations". This is a **structural** downside of connectionism because the fuzzy and parameterized nature of the models make it impossible for us to specify the desired nonlinear features ourselves. And without the "true efforts" we are supposed to make, we cannot expect AIs to be both "smart" and under control.

<div style="display: flex; align-items: flex-start">
    <span style="width: 10%"></span>
    <img src="/images/tom.gif" alt="tom" style="width: 80%; height: auto; float: left" title="Connectionist AI developers be like ...">
</div>

By the way, I would like promote a phiolosophy I believe: the less directly we manipulate something, the less control we have over it. It holds true most of the time, especially in real life. Exceptions of it require sufficient justifications for us to believe. For example, when we want to dig a hole on the ground, we may use shovels directly, or we can build a vehicle factory, produce excavators, and let excavators dig for us. The latter turns out to be a more efficient solution in the long run although it is indirect, and we are all convinced that this will work. However, I am not convinced so far that, by spending efforts on something like gathering more data, or improving computation power we can invent the next generation AI, since these efforts do not improve the core algorithm and break the current constraints.

<div style="display: flex; align-items: flex-start">
    <span style="width: 10%"></span>
    <img src="/images/cpp.webp" alt="cpp" style="width: 80%; height: auto; float: left" title="An indirect (and impractical) way of learning c++.">
</div>

## Conclusion
Contemporary mainstream AI paradigm "connectionism", mainly composed of machine learning and deep learning approaches, is a good approach to achieve both flexibility and developer friendliness, but at the cost of controllability. While I don't think safety issues or accuracy is a big concern, I do think such an approach will not be able to scale to general intelligence level to deal with complex real-life problems, because they lack delicately designed nonlinear features. And personally, brute force is neither interesting nor beautiful.

<div style="display: flex; align-items: flex-start">
    <span style="width: 20%"></span>
    <img src="/images/gymnastics.gif" alt="gymnastics" style="width: 60%; height: auto; float: left" title="I will be so surprised if it can be done correctly with connectionism.">
</div>

# Flexibility & Controllability
The best way to achieve controllability, as mentioned above, is to code AI's logic explicitly. However, under this context, it is hard to achieve flexibility because flexibility means deep coupling between components. For example, if we want AI to go to a chair and get seated, we might want the transition to be smooth, which requires nontrivial communications between the "walk" and "sit down" components. We human beings are not good at dealing with deeply coupled components because firstly, there is no rule or recipe we can follow to come up with such a solution, and secondly, verifying whether a complex and deeply-coupled algorithm is correct is hard enough, let alone coming up with one. On the other hand, if the AI system is sufficiently decoupled, it is much easier to develop and maintain beause we can adopt the "divide and conquer" strategy to solve problems separately. However, in this way AI will behave rigidly: it may have to walk to the place exactly in front of the chair, turn around and sit down.

<div style="display: flex; align-items: flex-start">
    <img src="/images/graph.webp" alt="graph" style="width: 30%; height: auto; float: left" title="A deeply coupled system of n components can have up to O(n^2) interal connections.">
    <img src="/images/decouple.png" alt="decouple" style="width: 70%; height: auto; float: left" title="Decoupling can help improve maintainability, but at the cost of flexibility.">
</div>

In theory, an AI system that is both flexible and controllable does exist, for example, we human beings ourselves. We are obviously flexible, and we are able to understand and control ourselves to a considerable extent. In most cases we are aware the reasons why we do something, and in other cases, we can explain our behaviors using psychological theories. The problem remaining is whether we can invent ourselves or come up with something similar.

Scientists have attempted to analyze human brains in order to build a similar intelligent system. We have made progress in understanding the characteristics of various kinds of neuronal cells, and how they are connected and communicate with each other. However, I doubt whether this direction will eventually succeed, because at some point we still need to dive in the details about how a specific behavior is acheved by the joint efforts of these neuronal cells. For example, how do we come up with the idea of substituting a displacement with two reflections in a leetcode problem? Can we explain the specific strategies behind the neuronal activities that enable us to come up with ideas like this?

<div style="display: flex; align-items: flex-start">
    <img src="/images/leetcode.png" alt="T-800" style="width: 50%; height: auto; float: left" title="A medium difficulty leetcode problem">
    <img src="/images/solution.png" alt="T-800" style="width: 50%; height: auto; float: left" title="An elegant solution to the leetcode problem">
</div>

If we cannot explain in steps how the brain solves a specific problem, then we cannot claim that we understand the brain, just like we cannot claim that we know how cpu works by studying only PN junctions. Therefore, the idea of learning from our brains is actually reduced to understanding a large piece of arbitrary computer program code. This is something we hate to do, because according to Rice's Theorem, unless there is something special about the piece of code, the task of "understanding" it (or formally, discovering its non-trivial semantics properties) is likely to be uncomputable.

You may argue that the structure of our brains may not be so delicate as a cpu, and that we only need to know the general working principles that can apply to all the problems, so that we can let the model learn and solve problems without having to analyze individual instances. This is probably true, but in this way we are going back to the mainstream "connectionism" paradigm. If we cannot understand a system thoroughly from top to bottom, then we don't know how to constrain it, then controllability is still a problem. Therefore, in the context of pursuing flexibility and controllability at the same time, we either attempt to understand our brains thoroughly, which is not likely to be possible as mentioned above, or we come up with our own model, which is also tedious as discussed in the beginning.

In conclusion, when we pursue flexibility and controllability at the same time, developer friendliness becomes a big problem. While it is possible for a general intelligence to be both flexible and controllable, it is very hard for us human beings to realize it in practice. This implies that if we want to bring an AGI to life, we have to sacrifice either flexibility or controllability.

<div style="display: flex; align-items: flex-start">
    <span style="width: 20%"></span>
    <img src="/images/bell.jpg" alt="belling the cat" style="width: 60%; height: auto; float: left" title="This reminds me of the story &quot;Belling the Cat&quot;. Mice gather together to discuss a perfect solution to defend against cats but they're unaware of its infeasibility.">
</div>

# Controllability & Developer Friendliness

## Symbolic AIs and Their Inspirations
Existing AIs that satisfy both controllability and developer friendly are mainly designed under the "symbolic" paradigm. A dated AI called General Problem Solver (GPS), for example, uses explicit and formal logic to solve problems. It is controllable because we fully understand its working principle, and can predict its output by following its problem solving procedure. It is developer friendly because the implementation logic is quite straightforward.

Traditional symbolism is not useful for most AI applications because it is extremely inflexible, so it is also unsuitable for developing AGI. However, we find it tempting to trade a part of the flexibility for controllability. Instead of insisting on putting all the real-life elements into a narrow framework so that everything can be inferred for a reason, what we want is just to make sure we understand and can conveniently modify any important parts in the AI system. Neuro-symbolic AI, for example, does not explain itself about how they come up with an intermediate result using fuzzy logic (for example, inspecting an image), but it is ok since it's not the core logic of AI and does not need much control. Even if these fuzzy components fail, it is not a big deal as long as we can trace the call stack and find out exactly which component fails. Therefore, neuro-symbolic AIs can outperform end-to-end connectionist AIs in complex situations that require both perceptions and logical reasoning.

<div style="display: flex; align-items: flex-start">
    <span style="width: 20%"></span>
    <img src="/images/neurosymbolic.ppm" alt="neuro symbolic" style="width: 60%; height: auto; float: left" title="Neuro-symbolic AI">
</div>

## Why Controllability & Developer Friendliness
The combination of Controllability and Developer Friendliness is the most promising choice for AGI development. The reasons are as follows. Developer Friendliness determines whether the AGI can be possibly built, so it is of first priority. Controllability determines how advanced and reliable an AI can be, since a high-rise needs a concrete basement. In comparison, Flexibility is not that important. An inflexible AI is much better than a flexible AI that only lives in the blueprint. An inflexible AI that builds a spacecraft slowly is better than a flexible AI that chats with users considerately. Therefore, sacrificing Flexibility turns out to be the best option.

Although we decide to sacrifice flexibility, it does not mean that the AGI will not be flexible at all. It is cheap to implement low level flexibility, for example, using a deep learning model to transform a casual input into a formatted one. We only want to sacrifice flexibility to the extent that we can easily decouple components and implement them separately. For example, human beings may be able to cook while doing laundry, but if we do not require AI to do so, then a lot of efforts are saved from figuring out how to interpolate the two tasks. Another example is that human beings can solve "trick questions" or easy Olympaid questions using uncommon strategies, and the association between problems and strategies is very flexible, which is hard to implement explicitly. (AlphaProof partially solved the problem, which will be discussed later.) In this case, we can just discard the feature and let it use existing trick question strategies, and hopefully it can still solve a lot of new problems.

## Conclusion
I think the combination of Controllability and Developer Friendliness is very underrated, since most researchers may focus on how to improve flexibility so that the AI can adapt to more situations. While flexibility is important, it is more important that we add a backbone to AI so that it can stand up and reach higher.

# End of This Chapter
In the next chapter, we will discuss paradigms and design patterns, and their theoretical and practical relationships.
