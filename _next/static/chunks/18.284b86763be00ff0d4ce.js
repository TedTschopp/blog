(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{rHLb:function(t){t.exports=JSON.parse('{"filename":"2021/python-features.md","frontmatter":{"csl":"../ieee-with-url.csl","date":"2021-02-15","hidden":true,"references":[],"subtitle":"","title":"10 underused features of modern Python [incomplete]","url2cite-link-output":"sup"},"preview":"Named tupleautomatic constructor generation etcstrong typingimmutablesame memory usage as normal tuplesdefault valuesmore safety than tuples, access params.name like objects, order does not mattercompatible API with tuplesTypingF strings Prints: for input 5.0, fn(x)=25 Similar to \\"x is","content_ast":[{"t":"Header","c":[2,["named-tuple",[],[]],[{"t":"Str","c":"Named tuple"}]]},{"t":"CodeBlock","c":[["",["py"],[]],"from typing import NamedTuple\\n\\nclass EnvParams(NamedTuple):\\n    name: str\\n    nr_agents: int\\n    mode: Literal[\\"uniform\\", \\"relative\\"] = \\"uniform\\"\\n\\ndef get_params() -> EnvParams:\\n    return EnvParams(name=\\"hello\\", nr_agents=42)"]},{"t":"BulletList","c":[[{"t":"Plain","c":[{"t":"Str","c":"automatic constructor generation etc"}]}],[{"t":"Plain","c":[{"t":"Str","c":"strong typing"}]}],[{"t":"Plain","c":[{"t":"Str","c":"immutable"}]}],[{"t":"Plain","c":[{"t":"Str","c":"same memory usage as normal tuples"}]}],[{"t":"Plain","c":[{"t":"Str","c":"default values"}]}],[{"t":"Plain","c":[{"t":"Str","c":"more safety than tuples, access "},{"t":"Code","c":[["",[],[]],"params.name"]},{"t":"Str","c":" like objects, order does not matter"}]}],[{"t":"Plain","c":[{"t":"Str","c":"compatible API with tuples"}]}]]},{"t":"Header","c":[2,["typing",[],[]],[{"t":"Str","c":"Typing"}]]},{"t":"Header","c":[2,["f-strings",[],[]],[{"t":"Str","c":"F strings"}]]},{"t":"CodeBlock","c":[["",["py"],[]],"def fn(x):\\n  return x * x\\n\\nx = 5\\nprint(f\\"for input {x:.1f}, {fn(x)=}\\")"]},{"t":"Para","c":[{"t":"Str","c":"Prints: "},{"t":"Code","c":[["",[],[]],"for input 5.0, fn(x)=25"]}]},{"t":"Para","c":[{"t":"Str","c":"Similar to "},{"t":"Code","c":[["",[],[]],"\\"x is {x}\\".format(x=x)"]},{"t":"Str","c":" but easier to read and write. You can add simple expression inside the {}. The special format specifier "},{"t":"Code","c":[["",[],[]],"f\\"{foo=}\\""]},{"t":"Str","c":" is the same as doing "},{"t":"Code","c":[["",[],[]],"f\\"foo={foo}\\""]}]},{"t":"Header","c":[2,["pathlib",[],[]],[{"t":"Str","c":"Pathlib"}]]},{"t":"CodeBlock","c":[["",["py"],[]],"from pathlib import Path\\n\\nmydir = Path(\\"foo\\")\\n\\nmyfile = mydir / \\"filename.txt\\""]},{"t":"Para","c":[{"t":"Str","c":"If you pass file paths around as strings, you have to figure out when to add slashes and when not to, and unless you always use "},{"t":"Code","c":[["",[],[]],"os.path.sep"]},{"t":"Str","c":" your code will work differently depending on the OS."}]},{"t":"Para","c":[{"t":"Code","c":[["",[],[]],"Path"]},{"t":"Str","c":"s have great methods for manipulating filenames that are much more readable than their "},{"t":"Code","c":[["",[],[]],"os.path"]},{"t":"Str","c":" equivalents:"}]},{"t":"CodeBlock","c":[["",["py"],[]],"myfile = Path(\\"foo/filename.txt\\")\\nmyfile.parent # Path(\\"foo\\")\\nmyfile.name # \\"filename.txt\\"\\nmyfile.suffix # \\".txt\\"\\n# replace file extension\\nmyfile.with_suffix(\'.csv\') # foo/filename.csv"]},{"t":"Para","c":[{"t":"Code","c":[["",[],[]],"Path"]},{"t":"Str","c":"s also have neat methods for opening / reading / writing files:"}]},{"t":"CodeBlock","c":[["",["py"],[]],"myfile.write_text(\\"hello\\")\\n\\nif myfile.exists():\\n  with myfile.open(\\"r\\") as f:\\n    # ...\\n    pass\\n\\ntext = (mydir / \\"input.txt\\").read_text()\\n\\n\\nfor file in Path(\\"foo\\").glob(\\"*.txt\\"):\\n  # every txt file in foo/\\n  pass"]},{"t":"Header","c":[2,["relative-imports",[],[]],[{"t":"Str","c":"Relative imports"}]]},{"t":"Para","c":[{"t":"Str","c":"The following is fairly common python code:"}]},{"t":"CodeBlock","c":[["",[],[]],"import util\\n\\nutil.foo()"]},{"t":"Para","c":[{"t":"Str","c":"But what is "},{"t":"Code","c":[["",[],[]],"util"]},{"t":"Str","c":"? It can be either a global module or a local file / directory. If there is a local file named "},{"t":"Code","c":[["",[],[]],"util.py"]},{"t":"Str","c":", it will shadow the corresponding module. This is a pretty common issue, and happens even to "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"experienced devs"}],["https://github.com/pytorch/pytorch/issues/24807#issuecomment-524155619",""]]},{"t":"Str","c":"."}]},{"t":"Para","c":[{"t":"Str","c":"Instead, in my opinion you should always use relative imports if you want to import a relative module instead of global ones."}]},{"t":"CodeBlock","c":[["",["py"],[]],"from . import util\\n# or\\nfrom .util import foo"]},{"t":"Para","c":[{"t":"Str","c":"Sadly this ambiguity issue is not completely fixeable without a breaking change in python itself, and due to a bad design decision in the Python module system relative imports have "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"some issues when python files are loaded in a specific way called "},{"t":"Quoted","c":[{"t":"DoubleQuote"},[{"t":"Str","c":"script mode"}]]}],["https://stackoverflow.com/a/28154841/2639190",""]]},{"t":"Str","c":", which you will probably come across sooner or later."}]},{"t":"Header","c":[2,["ordered-unordered-dicts",[],[]],[{"t":"Str","c":"Ordered unordered dicts"}]]},{"t":"Para","c":[{"t":"Str","c":"Since Python 3.6, Python uses a more compact representation of dicts (and thus "},{"t":"Code","c":[["",[],[]],"kwargs"]},{"t":"Str","c":"). Since Python 3.7, it is guaranteed that dicts are always iterated over in insertion order."}]},{"t":"Para","c":[{"t":"Str","c":"This means that every dict is basically an "},{"t":"Code","c":[["",[],[]],"OrderedDict"]},{"t":"Str","c":" except some utility functions are missing. This is really useful, because it means you can use normal dicts as ordered associative arrays."}]},{"t":"CodeBlock","c":[["",["py"],[]],"x = {\\n  \\"c\\": True,\\n  \\"b\\": False,\\n  \\"d\\": False\\n}\\nfor key in x:\\n    # guaranteed to always go through keys in the order \\"c\\", \\"b\\", \\"d\\"!"]},{"t":"Header","c":[1,["multiprocessing",[],[]],[{"t":"Str","c":"Multiprocessing"}]]},{"t":"Para","c":[{"t":"Str","c":"There\u2019s a ton of libraries for multithreading / multiprocessing in python, with varying degrees of magicness. But in Python 3, there\u2019s actually an integrated way to run a function on a large set of data quickly: "},{"t":"Link","c":[["",[],[]],[{"t":"Code","c":[["",[],[]],"multiprocessing.Pool"]}],["https://docs.python.org/3/library/multiprocessing.html",""]]}]},{"t":"CodeBlock","c":[["",["py"],[]],"def f(x):\\n    # expensive computation\\n    return x * x\\n\\nfrom multiprocessing import Pool\\n\\nwith Pool() as p:\\n    for result in p.imap(f, [1, 2, 3], chunksize=100):\\n      # ... handle result"]},{"t":"Para","c":[{"t":"Str","c":"This code does the same as "},{"t":"Code","c":[["",[],[]],"for i in [1,2,3]: f(i)"]},{"t":"Str","c":" except using all your CPU cores."}]},{"t":"Header","c":[2,["poetry",[],[]],[{"t":"Str","c":"Poetry"}]]},{"t":"Para","c":[{"t":"Str","c":"Here is all the stages of a Python developer\u2019s slow decent into madness:"}]},{"t":"OrderedList","c":[[1,{"t":"Decimal"},{"t":"Period"}],[[{"t":"Para","c":[{"t":"Str","c":"You write single file .py scripts without imports and functions. It\u2019s so easy to get so much done! You feel enlightened."}]}],[{"t":"Para","c":[{"t":"Str","c":"You start splitting your code in multiple functions in .py files, and feel enlightened of how structured your code is now."}]}],[{"t":"Para","c":[{"t":"Str","c":"You need to do some maths, so you learn about "},{"t":"Code","c":[["",[],[]],"pip"]},{"t":"Str","c":" and run "},{"t":"Code","c":[["",[],[]],"pip install numpy"]},{"t":"Str","c":" globally. You feel enlightened about how easy it is to use libraries. It\u2019s as easy as "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"import antigravity"}],["https://xkcd.com/353/",""]]},{"t":"Str","c":"!"}]}],[{"t":"Para","c":[{"t":"Str","c":"At some point you have some multiple projects that need different versions of some libraries. You learn about virtualenvs. You are confused about the difference between "},{"t":"Code","c":[["",[],[]],"venv"]},{"t":"Str","c":", "},{"t":"Code","c":[["",[],[]],"virtualenv"]},{"t":"Str","c":", "},{"t":"Code","c":[["",[],[]],"virtualenvwrapper"]},{"t":"Str","c":", but some random memorized commands works so you start using virtualenvs."}]}],[{"t":"Para","c":[{"t":"Str","c":"You try to use some older library from GitHub. You learn about "},{"t":"Code","c":[["",[],[]],"setup.py"]},{"t":"Str","c":" files and "},{"t":"Code","c":[["",[],[]],"requirements.txt"]},{"t":"Str","c":" files, and you feel enlightened! This is how you define exactly what you need to run your program! The project you\u2019re trying to use has a requirements.txt file like this:"}]},{"t":"CodeBlock","c":[["",[],[]],"pandas\\nnumpy"]},{"t":"Para","c":[{"t":"Str","c":"So you eagerly run"}]},{"t":"CodeBlock","c":[["",["sh"],[]],"python -m venv .venv\\nsource .venv/bin/activate\\npip install -r requirements.txt"]},{"t":"Para","c":[{"t":"Str","c":"Then you try running the project, but it turns out it actually also needs "},{"t":"Code","c":[["",[],[]],"sklearn"]},{"t":"Str","c":". So you try "},{"t":"Code","c":[["",[],[]],"pip install sklearn"]},{"t":"Str","c":" only to realize that "},{"t":"Code","c":[["",[],[]],"sklearn"]},{"t":"Str","c":" is actually a random package from someone else and to get "},{"t":"Code","c":[["",[],[]],"sklearn"]},{"t":"Str","c":" you actually need to install "},{"t":"Code","c":[["",[],[]],"scikit-learn"]},{"t":"Str","c":". You realize that package names are not actually related to the names of python modules (except incidentally) and feel enlightened by the power!"}]},{"t":"Para","c":[{"t":"Str","c":"But the code still doesn\u2019t run, theer\u2019s some weird issue. After an hour of investigation, you find some obscure bug "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"caused by an incompatible change"}],["http://blog.khinsen.net/posts/2017/11/16/a-plea-for-stability-in-the-scipy-ecosystem/",""]]},{"t":"Str","c":" some time 5 years ago in numpy. You try some old numpy versions until you find one that works. You learn about semver and freezing, and you feel enlightened! The developer should have just put "},{"t":"Code","c":[["",[],[]],"numpy==1.10"]},{"t":"Str","c":" into their requirements.txt!"}]}],[{"t":"Para","c":[{"t":"Str","c":"You find "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"something that recommends using Conda"}],["https://pytorch.org/get-started/locally/",""]]},{"t":"Str","c":". You are somewhat confused why the conda download is taking so long and eats up 2GB of bandwidth. After accepting a random EULA and having your shell changed prompt always say "},{"t":"Code","c":[["",[],[]],"(base) $"]},{"t":"Str","c":", you realize that in conda, everything is an env! It\u2019s so quick to add libraries, "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"even weird native ones"}],["https://anaconda.org/anaconda/mkl",""]]},{"t":"Str","c":" ! You feel enlightened."}]}],[{"t":"Para","c":[{"t":"Str","c":"You read some documentation and call a python function, but the function does not exist. After some reading, you see that the package you installed via conda is an outdated version. You now understand that conda is a completely different package manager from pip, and that conda packages are actually managed by third parties, some of which are outdated, and many don\u2019t exist at all. You start using "},{"t":"Code","c":[["",[],[]],"pip"]},{"t":"Str","c":" for some things and "},{"t":"Code","c":[["",[],[]],"conda"]},{"t":"Str","c":" for other things, all in the same environment."}]}],[{"t":"Para","c":[{"t":"Str","c":"The find out about the Official Modern Python Packaging tool "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"pipenv"}],["https://pipenv.pypa.io/en/latest/",""]]},{"t":"Str","c":"! Pipenv always and automatically manages a virtualenv with the exact dependencies as defined in a "},{"t":"Code","c":[["",[],[]],"Pipfile"]},{"t":"Str","c":", which is like a supercharged "},{"t":"Code","c":[["",[],[]],"requirements.txt"]},{"t":"Str","c":". It\u2019s amazing! Except you soon try to install a package and get a "},{"t":"Code","c":[["",[],[]],"Could not resolve dependencies"]},{"t":"Str","c":" error. You google a while, and figure out that most pypi packages don\u2019t actually have correctly specified dependencies, and that pip just doesn\u2019t really care about that. You also find out that "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"pipenv only really pretended to be an official tool"}],["https://chriswarrick.com/blog/2018/07/17/pipenv-promises-a-lot-delivers-very-little/",""]]},{"t":"Str","c":"."}]}],[{"t":"Para","c":[{"t":"Str","c":"You find out about "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"poetry"}],["https://python-poetry.org/",""]]},{"t":"Str","c":". It\u2019s like pipenv but actually good! It only takes 2 minutes to resolve dependencies instead of 10! It even puts your virtualenv in "},{"t":"Code","c":[["",[],[]],"~/.cache"]},{"t":"Str","c":" because it "},{"t":"Emph","c":[{"t":"Str","c":"really"}]},{"t":"Str","c":" doesn\u2019t matter if it gets deleted!"}]}]]]},{"t":"Header","c":[1,["typed-argparse",[],[]],[{"t":"Str","c":"Typed Argparse"}]]},{"t":"Para","c":[{"t":"Str","c":"Argparse is a neat library to create a simple command line interface. But arguments are declared as strings, and the IDE can\u2019t know about them."}]},{"t":"Para","c":[{"t":"Str","c":"With "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"Typed-Argparse"}],["https://github.com/swansonk14/typed-argument-parser",""]]},{"t":"Str","c":", your arguments are parsed directly into a class instance!"}]},{"t":"Para","c":[{"t":"Image","c":[["",[],[]],[{"t":"Str","c":"TAP example"}],["https://raw.githubusercontent.com/swansonk14/typed-argument-parser/master/images/tap.png","fig:"]]}]},{"t":"CodeBlock","c":[["",[],[]],"\\n```\\n\\n```\\n\\n```\\n\\n```\\n\\n```\\n\\n```"]}]}')}}]);