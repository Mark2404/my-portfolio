from config import *
from aiogram import Bot, Dispatcher, executor, types

bot = Bot(token=TOKEN, parse_mode=types.ParseMode.HTML)
dp = Dispatcher(bot)








if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)