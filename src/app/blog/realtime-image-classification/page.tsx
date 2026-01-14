"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RealTimeImageClassificationArticle() {
    return (
        <main className="min-h-screen bg-black text-foreground">
            <div className="py-24 px-6 md:px-24 max-w-5xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all mb-12">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Real-Time Image Classification On Android Using Flutter, TFlite
                    </h1>

                    <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
                        <a
                            href="https://github.com/kr1210/Flutter-Real-Time-Image-Classification"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent rounded-full text-accent hover:bg-accent hover:text-background transition-all"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View on GitHub
                        </a>
                    </div>

                    <div className="relative h-[600px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                        <Image
                            src="/images/tflite/tf1.jpg"
                            alt="Real Time Image Classification Main"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            If you’d like to jump straight to the code, please visit my Github-Repo:
                            <a href="https://github.com/kr1210/Flutter-Real-Time-Image-Classification" className="text-accent no-underline hover:underline ml-2">
                                Flutter-Real-Time-Image-Classification
                            </a>
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            Making a smartphone app from scratch might seem a daunting task to most newbies and maybe even seasoned programmers. Enter Flutter.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            As One of the promising, albeit untested technologies unveiled by Google for android app development, Flutter aims to make smartphone app development easier than ever. It is even rumored that flutter will soon be the go-to name in mobile app development. Creating UIs is a breeze and the developer friendly coding style makes the icing on the cake.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            Working as an AI engineer, one of the most common problems I and my team mates encounter is the matter of deployment of our models. How do you prototype your deep learning models in a quick, yet elegant way? The answer is carried around in our very pockets. Smartphones. That’s right. That overpowered piece of hardware on which you are possibly reading this article at this very moment is any developer’s dream come true. Combine the ubiquitous nature of smartphones and the versatile technology that is machine learning and you’re looking at a vast potential of innovation right there.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            Now, I work at a place where people are often expected to roll up their sleeves and get the job done rather than wait for help. So, at one such instance, the matter of deployment loomed ahead of me and I had to choose between the daunting world of native android development and an exciting, yet uncharted new tech called Flutter. I chose the latter. At the time of writing this article, not every aspect of flutter is super stable, but it is certain that all of those problems shall disappear. In this article, I shall describe the important aspects of integrating deep learning models into an android app made with flutter. While I am no experienced android nor flutter developer, I was able to get a base version working in about a week. That’s how easy it is.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            I assume the reader has a base understanding of layouts in flutter and a basic understanding of the programming language used, which is Dart. If you are unfamiliar with what I just mentioned a few beginner posts will get you on your way. While the methods and code mentioned in this project is not exactly what I would call optimized, it can serve as a starting point or a base for your own projects. So let’s dive in to it.
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">We will be using the TFlite plugin</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            to integrate our neural network with the app. In order to use it, We first need to specify it as a dependency and also specify our model file’s presence in the assets folder. There are three steps to be followed for this:
                        </p>
                        <ol className="list-decimal list-inside space-y-3 text-slate-400 mb-8">
                            <li>Place the model file(in .tflite format) in the assets folder along with the labels.txt file which contains the name of the classes used.</li>
                            <li>Specify the file’s presence in the assets folder so that the compiler knows to use it and also specify the usage of the plugin.</li>
                            <li>In android/app/build.gradle, add the following setting in android block.</li>
                        </ol>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-white/10 font-mono text-sm text-slate-300 mb-8">
                            <pre>
                                {`aaptOptions {
    noCompress 'tflite'
    noCompress 'lite'
}`}
                            </pre>
                        </div>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            So let’s open up our pubspec.yaml file.
                        </p>

                        <div className="relative h-[500px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 group">
                            <Image src="/images/tflite/tf2.jpg" alt="pubspec.yaml configuration" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-accent">pubspec.yaml</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Here, you can see that I’ve specified the tflite: 1.0.1 as a dev_dependency. Now it is ready to be imported and used with our app. It’s that simple (Not quite). When flutter runs the packages get command, the files required to run this plugin will be downloaded without any further action from our side.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Now let’s open up our home.dart file, which is the page which has the ignite button labeled “start classification”.
                        </p>

                        <div className="relative h-[500px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 group">
                            <Image src="/images/tflite/tf3.jpg" alt="Importing tflite plugin" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-accent">Importing the tflite plugin</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            As you can see, I’ve imported the tfliteplugin on line 3 in the home.dart page, similar to how I would import library files in other standard programming languages.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            The Tflite plugin comes bundled with a function called loadModel() which is used to specify the name of the model to be loaded and the labels.txt file, which contains the name of the classes used.
                        </p>

                        <div className="relative h-[500px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 group">
                            <Image src="/images/tflite/tf3.jpg" alt="Loading the model" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-accent">Loading the model</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            For representation purposes, I’ve wrapped up this process in a function of my own, which is also called loadmodel().
                        </p>

                        <div className="relative h-[500px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 group">
                            <Image src="/images/tflite/tf4.jpg" alt="runModelOnFrame function" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-accent">runModelOnFrame() function</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Now let’s move on to the camera.dart file, where the actual inference takes place. Here, We use the function runModelOnFrame(), which takes the frame from the camera stream and takes it as input to the model. This function requires a list of arguments such as the frame, its height, width, the number of results to be displayed and so on.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            The output is received in the format specified by the plugin’s ReadMe file found on Flutter Pub.
                        </p>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-white/10 font-mono text-sm text-slate-300 mb-8">
                            <pre>
                                {`{
index: 0,
label: "person",
confidence: 0.629
}`}
                            </pre>
                        </div>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            This output is received by the recognitions variable.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            The output received from the model is imposed on the ImageStream from the camera on the render.dart page. In order to do this, the results obtained from the model is passed into the render.dart page as a list named, well, results. These results are then displayed along with the confidence percentage on the screen.
                        </p>

                        <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                            <p className="text-slate-300 font-medium">
                                All the code and project files are available in my GitHub: <a href="https://github.com/kr1210/Flutter-Real-Time-Image-Classification" className="text-accent hover:underline">Flutter-Real-Time-Image-Classification</a>
                            </p>
                        </div>

                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10">
                        <Link href="/" className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
                        </Link>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
